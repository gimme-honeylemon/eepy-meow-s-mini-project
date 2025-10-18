# app.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import connect_db, disconnect_db
from routes.users import router as users_router
from routes.orders import router as orders_router  # Add this import

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(users_router, prefix="/api")
app.include_router(orders_router, prefix="/api")  # Add this line

@app.on_event("startup")
async def startup():
    await connect_db()

@app.on_event("shutdown")
async def shutdown():
    await disconnect_db()

@app.get("/")
async def root():
    return {"message": "FastAPI is running!"}

@app.get("/test-db")
async def test_database():
    """Test endpoint to verify database connection and tables"""
    from database import database
    try:
        # Test if tables exist
        tables_query = """
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        """
        tables = await database.fetch_all(tables_query)
        
        # Test menu items count
        menu_count_query = "SELECT COUNT(*) as count FROM menu_items"
        menu_count = await database.fetch_one(menu_count_query)
        
        return {
            "status": "success",
            "tables": [table['table_name'] for table in tables],
            "menu_items_count": menu_count['count'] if menu_count else 0
        }
    except Exception as e:
        return {
            "status": "error",
            "error": str(e)
        }

@app.post("/init-db")
async def manual_init_database():
    """Manually initialize database tables and sample data"""
    from database import init_database
    try:
        await init_database()
        return {"status": "success", "message": "Database initialized successfully"}
    except Exception as e:
        return {"status": "error", "error": str(e)}