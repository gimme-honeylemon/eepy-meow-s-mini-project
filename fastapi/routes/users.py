# routes/users.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from database import insert_user, get_user, get_user_by_email, get_user_by_email_only, update_user, delete_user
from password_utils import hash_password, verify_password

router = APIRouter()

# Pydantic model for user creation
class UserCreate(BaseModel):
    username: str
    password: str
    email: str

# Pydantic model for user update
class UserUpdate(BaseModel):
    username: Optional[str]
    password: Optional[str]
    email: Optional[str]

# Pydantic model for user response
class User(BaseModel):
    user_id: int
    username: str
    email: str
    created_at: datetime

# Pydantic model for login
class UserLogin(BaseModel):
    email: str
    password: str

# Endpoint for frontend registration
@router.post("/register", response_model=User)
async def register_user(user: UserCreate):
    try:
        print(f"Received registration request: {user}")
        
        # Check if the username already exists
        existing_user = await get_user(user.username)
        if existing_user:
            raise HTTPException(status_code=400, detail="Username already exists")

        # Hash the password before storing
        hashed_password = hash_password(user.password)
        print("Password hashed successfully")

        print("Inserting user...")
        result = await insert_user(user.username, hashed_password, user.email)
        
        if result is None:
            raise HTTPException(status_code=400, detail="Error creating user")
        
        print(f"User created: {result}")
        # Return user data without password hash
        return {
            "user_id": result.user_id,
            "username": result.username,
            "email": result.email,
            "created_at": result.created_at
        }
        
    except Exception as e:
        print(f"Error in register_user: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint for frontend login
@router.post("/login")
async def login_user(user: UserLogin):
    try:
        print(f"Login attempt for: {user.email}")
        
        # First, get user by email only (without password check)
        db_user = await get_user_by_email_only(user.email)
        
        if db_user is None:
            raise HTTPException(status_code=404, detail="User not found")

        # Verify the password
        if not verify_password(user.password, db_user.password_hash):
            raise HTTPException(status_code=401, detail="Invalid password")

        print("Login successful")
        return {
            "user_id": db_user.user_id,
            "username": db_user.username,
            "email": db_user.email,
            "created_at": db_user.created_at
        }
        
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error in login_user: {e}")
        raise HTTPException(status_code=500, detail=str(e))

# Test endpoint
@router.get("/test")
async def test_endpoint():
    return {"message": "Users router is working!"}

# Endpoint to create a new user (original endpoint)
@router.post("/users/create", response_model=User)
async def create_user(user: UserCreate):
    existing_user = await get_user(user.username)
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already exists")

    result = await insert_user(user.username, user.password_hash, user.email)
    if result is None:
        raise HTTPException(status_code=400, detail="Error creating user")
    return result

# Endpoint to get a user by user_id
@router.get("/users/{user_id}", response_model=User)
async def read_user(user_id: int):
    # You'll need to implement get_user_by_id in database.py
    raise HTTPException(status_code=501, detail="Not implemented")

# Endpoint to update a user
@router.put("/users/{user_id}", response_model=User)
async def update_user_endpoint(user_id: int, user: UserUpdate):
    result = await update_user(user_id, user.username, user.password_hash, user.email)
    if result is None:
        raise HTTPException(status_code=404, detail="User not found")
    return result

# Endpoint to delete a user
@router.delete("/users/{user_id}")
async def delete_user_endpoint(user_id: int):
    result = await delete_user(user_id)
    if result is None:
        raise HTTPException(status_code=404, detail="User not found")
    return {"detail": "User deleted"}