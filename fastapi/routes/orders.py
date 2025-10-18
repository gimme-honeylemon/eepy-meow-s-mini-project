# routes/orders.py
from fastapi import APIRouter, HTTPException, Depends, Header
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from database import database

router = APIRouter()

# Pydantic models
class OrderItemCreate(BaseModel):
    item_id: int
    item_name: str
    item_price: float
    quantity: int

class OrderCreate(BaseModel):
    items: List[OrderItemCreate]
    status: str = "pending"

class OrderResponse(BaseModel):
    order_id: int
    user_id: int
    status: str
    total_amount: float
    created_at: datetime

class CartItem(BaseModel):
    item_id: int
    item_name: str
    item_price: float
    quantity: int
    image_url: str
    size: str = 'regular'
    temperature: str = 'hot'
    special_instructions: str = ''

class CartUpdateRequest(BaseModel):
    quantity: int

# Simple token verification (replace with proper JWT later)
async def verify_token(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    
    token = authorization.replace("Bearer ", "")
    
    # Simple token verification - in production, use proper JWT validation
    # For now, we'll assume the token contains the user_id
    try:
        # Extract user_id from token (simple approach for testing)
        # In a real app, you'd decode JWT and verify signature
        user_id = int(token) if token.isdigit() else 1  # Fallback to user 1 for testing
        return {"user_id": user_id}
    except:
        raise HTTPException(status_code=401, detail="Invalid token")

# Get menu items
@router.get("/menu")
async def get_menu_items():
    try:
        query = "SELECT * FROM menu_items WHERE is_available = TRUE"
        return await database.fetch_all(query=query)
    except Exception as e:
        print(f"Error fetching menu: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch menu")

# Add to cart
@router.post("/cart/add")
async def add_to_cart(item: CartItem, user: dict = Depends(verify_token)):
    user_id = user.get("user_id")
    
    try:
        # Check if item already in cart with same customization
        check_query = """
        SELECT * FROM user_cart 
        WHERE user_id = :user_id AND item_id = :item_id AND size = :size AND temperature = :temperature AND special_instructions = :special_instructions
        """
        existing_item = await database.fetch_one(
            check_query, 
            {
                "user_id": user_id, 
                "item_id": item.item_id,
                "size": item.size,
                "temperature": item.temperature,
                "special_instructions": item.special_instructions
            }
        )
        
        if existing_item:
            # Update quantity and price
            update_query = """
            UPDATE user_cart 
            SET quantity = quantity + :quantity, item_price = :item_price, updated_at = CURRENT_TIMESTAMP
            WHERE user_id = :user_id AND item_id = :item_id AND size = :size AND temperature = :temperature AND special_instructions = :special_instructions
            """
            await database.execute(
                update_query,
                {
                    "user_id": user_id, 
                    "item_id": item.item_id, 
                    "quantity": item.quantity,
                    "item_price": item.item_price,
                    "size": item.size,
                    "temperature": item.temperature,
                    "special_instructions": item.special_instructions
                }
            )
        else:
            # Insert new item
            insert_query = """
            INSERT INTO user_cart (user_id, item_id, item_name, item_price, quantity, size, temperature, special_instructions)
            VALUES (:user_id, :item_id, :item_name, :item_price, :quantity, :size, :temperature, :special_instructions)
            """
            await database.execute(
                insert_query,
                {
                    "user_id": user_id,
                    "item_id": item.item_id,
                    "item_name": item.item_name,
                    "item_price": item.item_price,
                    "quantity": item.quantity,
                    "size": item.size,
                    "temperature": item.temperature,
                    "special_instructions": item.special_instructions
                }
            )
        
        return {"message": "Item added to cart"}
    except Exception as e:
        print(f"Error adding to cart: {e}")
        raise HTTPException(status_code=500, detail="Failed to add item to cart")

# Get user cart
@router.get("/cart")
async def get_cart(user: dict = Depends(verify_token)):
    user_id = user.get("user_id")
    
    try:
        query = """
        SELECT uc.*, mi.image_url 
        FROM user_cart uc 
        LEFT JOIN menu_items mi ON uc.item_id = mi.item_id 
        WHERE uc.user_id = :user_id
        """
        cart_items = await database.fetch_all(query, {"user_id": user_id})
        
        return cart_items
    except Exception as e:
        print(f"Error fetching cart: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch cart")

# Remove from cart
@router.delete("/cart/{item_id}")
async def remove_from_cart(item_id: int, user: dict = Depends(verify_token)):
    user_id = user.get("user_id")
    
    try:
        query = "DELETE FROM user_cart WHERE user_id = :user_id AND item_id = :item_id"
        await database.execute(query, {"user_id": user_id, "item_id": item_id})
        
        return {"message": "Item removed from cart"}
    except Exception as e:
        print(f"Error removing from cart: {e}")
        raise HTTPException(status_code=500, detail="Failed to remove item from cart")

# Update cart quantity
@router.put("/cart/{item_id}")
async def update_cart_quantity(item_id: int, request: CartUpdateRequest, user: dict = Depends(verify_token)):
    user_id = user.get("user_id")
    quantity = request.quantity
    
    try:
        if quantity <= 0:
            # Remove item if quantity is 0 or less
            await remove_from_cart(item_id, user)
            return {"message": "Item removed from cart"}
        
        query = "UPDATE user_cart SET quantity = :quantity WHERE user_id = :user_id AND item_id = :item_id"
        await database.execute(query, {"user_id": user_id, "item_id": item_id, "quantity": quantity})
        
        return {"message": "Cart updated"}
    except Exception as e:
        print(f"Error updating cart: {e}")
        raise HTTPException(status_code=500, detail="Failed to update cart")

# Create order
@router.post("/orders")
async def create_order(user: dict = Depends(verify_token)):
    user_id = user.get("user_id")
    
    try:
        # Get cart items
        cart_query = "SELECT * FROM user_cart WHERE user_id = :user_id"
        cart_items = await database.fetch_all(cart_query, {"user_id": user_id})
        
        if not cart_items:
            raise HTTPException(status_code=400, detail="Cart is empty")
        
        # Calculate total amount
        total_amount = sum(item['quantity'] * item['item_price'] for item in cart_items)
        
        # Create order
        order_query = """
        INSERT INTO orders (user_id, total_amount, status)
        VALUES (:user_id, :total_amount, 'pending')
        RETURNING order_id
        """
        order_result = await database.fetch_one(
            order_query, 
            {"user_id": user_id, "total_amount": total_amount}
        )
        order_id = order_result['order_id']
        
        # Add order items
        for item in cart_items:
            order_item_query = """
            INSERT INTO order_items (order_id, item_id, item_name, item_price, quantity, total_price)
            VALUES (:order_id, :item_id, :item_name, :item_price, :quantity, :total_price)
            """
            await database.execute(
                order_item_query,
                {
                    "order_id": order_id,
                    "item_id": item['item_id'],
                    "item_name": item['item_name'],
                    "item_price": item['item_price'],
                    "quantity": item['quantity'],
                    "total_price": item['quantity'] * item['item_price']
                }
            )
        
        # Clear cart
        clear_cart_query = "DELETE FROM user_cart WHERE user_id = :user_id"
        await database.execute(clear_cart_query, {"user_id": user_id})
        
        return {"order_id": order_id, "message": "Order created successfully"}
    except Exception as e:
        print(f"Error creating order: {e}")
        raise HTTPException(status_code=500, detail="Failed to create order")

# Get user orders
@router.get("/orders/my-orders")
async def get_my_orders(user: dict = Depends(verify_token)):
    user_id = user.get("user_id")
    
    try:
        orders_query = """
        SELECT o.*, 
               json_agg(
                   json_build_object(
                       'item_name', oi.item_name,
                       'quantity', oi.quantity,
                       'item_price', oi.item_price,
                       'total_price', oi.total_price
                   )
               ) as items
        FROM orders o
        LEFT JOIN order_items oi ON o.order_id = oi.order_id
        WHERE o.user_id = :user_id
        GROUP BY o.order_id
        ORDER BY o.created_at DESC
        """
        orders = await database.fetch_all(orders_query, {"user_id": user_id})
        
        return orders
    except Exception as e:
        print(f"Error fetching orders: {e}")
        raise HTTPException(status_code=500, detail="Failed to fetch orders")

