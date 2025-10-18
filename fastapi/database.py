# database.py
from databases import Database

POSTGRES_USER = "temp"
POSTGRES_PASSWORD = "temp"
POSTGRES_DB = "advcompro"
POSTGRES_HOST = "db"

DATABASE_URL = f'postgresql+asyncpg://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}/{POSTGRES_DB}'

database = Database(DATABASE_URL)

async def connect_db():
    try:
        await database.connect()
        print("Database connected")
        await init_database()
    except Exception as e:
        print(f"❌ Database connection failed: {e}")
        raise

async def disconnect_db():
    await database.disconnect()
    print("Database disconnected")

# Function to insert a new user into the users table
async def insert_user(username: str, password_hash: str, email: str):
    query = """
    INSERT INTO users (username, password_hash, email)
    VALUES (:username, :password_hash, :email)
    RETURNING user_id, username, password_hash, email, created_at
    """
    values = {"username": username, "password_hash": password_hash, "email": email}
    return await database.fetch_one(query=query, values=values)

# Function to select a user by username
async def get_user(username: str):
    query = "SELECT * FROM users WHERE username = :username"
    return await database.fetch_one(query=query, values={"username": username})

# Function to select a user by email and password
async def get_user_by_email(email: str, password_hash: str):
    query = "SELECT * FROM users WHERE email = :email and password_hash = :password_hash"
    return await database.fetch_one(query=query, values={"email": email, "password_hash": password_hash})

# Function to update a user in the users table
async def update_user(user_id: int, username: str, password_hash: str, email: str):
    query = """
    UPDATE users 
    SET username = :username, password_hash = :password_hash, email = :email
    WHERE user_id = :user_id
    RETURNING user_id, username, password_hash, email, created_at
    """
    values = {"user_id": user_id, "username": username, "password_hash": password_hash, "email": email}
    return await database.fetch_one(query=query, values=values)

# Function to delete a user from the users table
async def delete_user(user_id: int):
    query = "DELETE FROM users WHERE user_id = :user_id RETURNING *"
    return await database.fetch_one(query=query, values={"user_id": user_id})

# Database initialization functions
async def create_tables():
    """Create all required database tables"""
    
    # Users table
    users_table = """
    CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
    
    # Menu items table
    menu_items_table = """
    CREATE TABLE IF NOT EXISTS menu_items (
        item_id SERIAL PRIMARY KEY,
        item_name VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        image_url VARCHAR(500),
        is_available BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
    
    # User cart table
    user_cart_table = """
    CREATE TABLE IF NOT EXISTS user_cart (
        cart_id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
        item_id INTEGER REFERENCES menu_items(item_id) ON DELETE CASCADE,
        item_name VARCHAR(255) NOT NULL,
        item_price DECIMAL(10,2) NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 1,
        total_price DECIMAL(10,2) GENERATED ALWAYS AS (item_price * quantity) STORED,
        special_instructions TEXT,
        size VARCHAR(50) DEFAULT 'regular',
        temperature VARCHAR(50) DEFAULT 'hot',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, item_id, size, temperature, special_instructions)
    );
    """
    
    # Orders table
    orders_table = """
    CREATE TABLE IF NOT EXISTS orders (
        order_id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
        total_amount DECIMAL(10,2) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
    
    # Order items table
    order_items_table = """
    CREATE TABLE IF NOT EXISTS order_items (
        order_item_id SERIAL PRIMARY KEY,
        order_id INTEGER REFERENCES orders(order_id) ON DELETE CASCADE,
        item_id INTEGER REFERENCES menu_items(item_id) ON DELETE CASCADE,
        item_name VARCHAR(255) NOT NULL,
        item_price DECIMAL(10,2) NOT NULL,
        quantity INTEGER NOT NULL,
        total_price DECIMAL(10,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """
    
    # Execute table creation queries
    try:
        await database.execute(users_table)
        print("✅ Users table created")
    except Exception as e:
        print(f"❌ Failed to create users table: {e}")
        raise
    
    try:
        await database.execute(menu_items_table)
        print("✅ Menu items table created")
    except Exception as e:
        print(f"❌ Failed to create menu_items table: {e}")
        raise
    
    try:
        await database.execute(user_cart_table)
        print("✅ User cart table created")
    except Exception as e:
        print(f"❌ Failed to create user_cart table: {e}")
        raise
    
    try:
        await database.execute(orders_table)
        print("✅ Orders table created")
    except Exception as e:
        print(f"❌ Failed to create orders table: {e}")
        raise
    
    try:
        await database.execute(order_items_table)
        print("✅ Order items table created")
    except Exception as e:
        print(f"❌ Failed to create order_items table: {e}")
        raise

async def insert_sample_data():
    """Insert sample menu items"""
    
    # Check if menu items already exist
    existing_items = await database.fetch_all("SELECT COUNT(*) as count FROM menu_items")
    if existing_items[0]['count'] > 0:
        print("📋 Sample menu items already exist, skipping...")
        return
    
    # Sample menu items
    sample_items = [
        ("Espresso", 3.50, "/Espresso.png"),
        ("Cappuccino", 4.50, "/Cappuccino.png"),
        ("Latte", 4.75, "/Latte.png"),
        ("Mocha", 5.25, "/Mocha.png"),
        ("Americano", 3.75, "/Americano.png"),
        ("Macchiato", 4.25, "/Macchiato.png"),
        ("Flat White", 4.00, "/Flat White.png"),
        ("Matcha", 4.50, "/Matcha.png"),
        ("Black Coffee", 2.50, "/Black Coffee.png")
    ]
    
    insert_query = """
    INSERT INTO menu_items (item_name, price, image_url)
    VALUES (:item_name, :price, :image_url)
    """
    
    for item_name, price, image_url in sample_items:
        await database.execute(insert_query, {
            "item_name": item_name,
            "price": price,
            "image_url": image_url
        })
    
    print(f"✅ Inserted {len(sample_items)} sample menu items")

async def update_existing_tables():
    """Update existing tables with new columns if they don't exist"""
    try:
        # Check if new columns exist in user_cart table
        check_columns_query = """
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'user_cart' AND column_name IN ('size', 'temperature', 'special_instructions', 'total_price', 'updated_at')
        """
        existing_columns = await database.fetch_all(check_columns_query)
        existing_column_names = [col['column_name'] for col in existing_columns]
        
        # Add missing columns
        if 'size' not in existing_column_names:
            await database.execute("ALTER TABLE user_cart ADD COLUMN size VARCHAR(50) DEFAULT 'regular'")
            print("✅ Added 'size' column to user_cart table")
        
        if 'temperature' not in existing_column_names:
            await database.execute("ALTER TABLE user_cart ADD COLUMN temperature VARCHAR(50) DEFAULT 'hot'")
            print("✅ Added 'temperature' column to user_cart table")
        
        if 'special_instructions' not in existing_column_names:
            await database.execute("ALTER TABLE user_cart ADD COLUMN special_instructions TEXT")
            print("✅ Added 'special_instructions' column to user_cart table")
        
        if 'updated_at' not in existing_column_names:
            await database.execute("ALTER TABLE user_cart ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
            print("✅ Added 'updated_at' column to user_cart table")
        
        if 'total_price' not in existing_column_names:
            await database.execute("ALTER TABLE user_cart ADD COLUMN total_price DECIMAL(10,2) GENERATED ALWAYS AS (item_price * quantity) STORED")
            print("✅ Added 'total_price' column to user_cart table")
        else:
            # Update existing total_price column to use the correct calculation
            try:
                await database.execute("ALTER TABLE user_cart DROP COLUMN total_price")
                await database.execute("ALTER TABLE user_cart ADD COLUMN total_price DECIMAL(10,2) GENERATED ALWAYS AS (item_price * quantity) STORED")
                print("✅ Updated 'total_price' column calculation")
            except Exception as e:
                print(f"⚠️ Could not update total_price column: {e}")
        
        # Update unique constraint if needed
        try:
            await database.execute("ALTER TABLE user_cart DROP CONSTRAINT IF EXISTS user_cart_user_id_item_id_key")
            await database.execute("""
                ALTER TABLE user_cart 
                ADD CONSTRAINT user_cart_unique_customization 
                UNIQUE (user_id, item_id, size, temperature, special_instructions)
            """)
            print("✅ Updated unique constraint for user_cart table")
        except Exception as e:
            print(f"⚠️ Could not update unique constraint: {e}")
            
    except Exception as e:
        print(f"⚠️ Could not update existing tables: {e}")

async def init_database():
    """Initialize the database with tables and sample data"""
    try:
        print("🚀 Initializing database...")
        await create_tables()
        await update_existing_tables()
        await insert_sample_data()
        print("✅ Database initialization completed successfully!")
    except Exception as e:
        print(f"❌ Database initialization failed: {e}")
        raise

# Additional cart functions for enhanced features
async def add_to_cart(user_id: int, item_id: int, item_name: str, item_price: float, 
                     quantity: int = 1, size: str = 'regular', temperature: str = 'hot', 
                     special_instructions: str = None):
    """Add item to cart with customization options"""
    query = """
    INSERT INTO user_cart (user_id, item_id, item_name, item_price, quantity, size, temperature, special_instructions)
    VALUES (:user_id, :item_id, :item_name, :item_price, :quantity, :size, :temperature, :special_instructions)
    ON CONFLICT (user_id, item_id, size, temperature, special_instructions)
    DO UPDATE SET 
        quantity = user_cart.quantity + :quantity,
        updated_at = CURRENT_TIMESTAMP
    RETURNING cart_id, total_price
    """
    values = {
        "user_id": user_id,
        "item_id": item_id,
        "item_name": item_name,
        "item_price": item_price,
        "quantity": quantity,
        "size": size,
        "temperature": temperature,
        "special_instructions": special_instructions
    }
    return await database.fetch_one(query=query, values=values)

async def get_user_cart_with_details(user_id: int):
    """Get user cart with all details including customizations"""
    query = """
    SELECT 
        uc.*,
        mi.image_url,
        mi.is_available
    FROM user_cart uc
    LEFT JOIN menu_items mi ON uc.item_id = mi.item_id
    WHERE uc.user_id = :user_id
    ORDER BY uc.created_at DESC
    """
    return await database.fetch_all(query=query, values={"user_id": user_id})

async def update_cart_item_quantity(cart_id: int, quantity: int):
    """Update quantity of a specific cart item"""
    if quantity <= 0:
        # Remove item if quantity is 0 or less
        query = "DELETE FROM user_cart WHERE cart_id = :cart_id RETURNING *"
        return await database.fetch_one(query=query, values={"cart_id": cart_id})
    else:
        query = """
        UPDATE user_cart 
        SET quantity = :quantity, updated_at = CURRENT_TIMESTAMP
        WHERE cart_id = :cart_id
        RETURNING *
        """
        return await database.fetch_one(query=query, values={"cart_id": cart_id, "quantity": quantity})