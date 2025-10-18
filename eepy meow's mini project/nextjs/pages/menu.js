"use client";

import { useState, useEffect } from "react";
import { Box, IconButton, Typography, Snackbar, Alert, CircularProgress } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import MenuCard from "@/components/MenuCard";

export default function MenuPage() {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Debug token and API
  useEffect(() => {
    console.log("Current token:", token);
    console.log("Menu API URL:", "http://localhost:8008/api/menu");
  }, [token]);

  // Fetch menu items from backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        console.log("Fetching menu items...");
        
        // Test direct fetch first to see if API is working
        try {
          const testRes = await fetch("http://localhost:8008/api/menu");
          console.log("Direct fetch status:", testRes.status);
          const testData = await testRes.json();
          console.log("Direct fetch data:", testData);
        } catch (fetchErr) {
          console.error("Direct fetch error:", fetchErr);
        }
        
        // Then try with axios
        const res = await api.get("/menu");
        console.log("Axios response:", res);
        console.log("Response data:", res.data);
        console.log("Data type:", typeof res.data);
        console.log("Is array?", Array.isArray(res.data));
        
        // Handle different response structures
        let items = res.data;
        if (res.data && res.data.data) {
          items = res.data.data; // If nested under data property
        }
        if (res.data && res.data.menu) {
          items = res.data.menu; // If nested under menu property
        }
        if (res.data && res.data.items) {
          items = res.data.items; // If nested under items property
        }
        
        console.log("Processed items:", items);
        
        if (!items || !Array.isArray(items)) {
          console.warn("No valid menu items found, using empty array");
          items = [];
        }
        
        // If no items from API, use mock data for testing
        if (items.length === 0) {
          console.warn("No menu items from API, using mock data");
          items = [
            {
              item_id: 1,
              item_name: "Espresso",
              price: 3.50,
              image_url: "/Espresso.png",
              is_available: true
            },
            {
              item_id: 2,
              item_name: "Cappuccino",
              price: 4.50,
              image_url: "/Cappuccino.png", 
              is_available: true
            },
            {
              item_id: 3,
              item_name: "Latte",
              price: 4.75,
              image_url: "/Latte.png",
              is_available: true
            },
            {
              item_id: 4,
              item_name: "Mocha",
              price: 5.25,
              image_url: "/Mocha.png",
              is_available: true
            },
            {
              item_id: 5,
              item_name: "Americano",
              price: 3.75,
              image_url: "/Americano.png",
              is_available: true
            },
            {
              item_id: 6,
              item_name: "Macchiato",
              price: 4.25,
              image_url: "/Macchiato.png",
              is_available: true
            }
          ];
        }
        
        setMenuItems(items);
        setTotalQuantity(Array(items.length).fill(0));
        
        if (items.length === 0) {
          console.warn("Menu items array is empty");
        }
      } catch (err) {
        console.error("Error fetching menu:", err);
        
        // Use mock data if API fails
        const mockMenuItems = [
          {
            item_id: 1,
            item_name: "Espresso",
            price: 3.50,
            image_url: "/default-coffee.png",
            is_available: true
          },
          {
            item_id: 2,
            item_name: "Cappuccino", 
            price: 4.50,
            image_url: "/default-coffee.png",
            is_available: true
          },
          {
            item_id: 3,
            item_name: "Latte",
            price: 4.75,
            image_url: "/default-coffee.png",
            is_available: true
          }
        ];
        
        setMenuItems(mockMenuItems);
        setTotalQuantity(Array(mockMenuItems.length).fill(0));
        
        setSnackbar({
          open: true,
          message: "Using demo menu data - API connection failed",
          severity: "info",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Fetch cart count
  useEffect(() => {
    const fetchCartCount = async () => {
      if (!token) return;

      try {
        const res = await api.get("/cart");
        const total = res.data.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(total);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCartCount();
  }, [token]);

  const handleQuantityChange = (index, quantity) => {
    const updated = [...totalQuantity];
    updated[index] = quantity;
    setTotalQuantity(updated);
  };

  const handleAddToCart = async (item, quantity) => {
    if (!token) {
      setSnackbar({
        open: true,
        message: "Please login first to add items to cart",
        severity: "warning",
      });
      return;
    }

    if (quantity <= 0) {
      setSnackbar({
        open: true,
        message: "Please select at least 1 item",
        severity: "warning",
      });
      return;
    }

    try {
      await api.post("/cart/add", {
        item_id: item.item_id,
        item_name: item.item_name,
        item_price: item.price,
        quantity: quantity,
        image_url: item.image_url
      });

      setSnackbar({
        open: true,
        message: `${quantity} ${item.item_name}(s) added to cart!`,
        severity: "success",
      });

      // Update cart count
      setCartCount(prev => prev + quantity);

      // Reset quantity for this item
      const itemIndex = menuItems.findIndex(menuItem => menuItem.item_id === item.item_id);
      if (itemIndex !== -1) {
        const updated = [...totalQuantity];
        updated[itemIndex] = 0;
        setTotalQuantity(updated);
      }
    } catch (err) {
      console.error("Add to cart failed:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setSnackbar({
          open: true,
          message: "Session expired. Please login again.",
          severity: "warning",
        });
      } else {
        setSnackbar({
          open: true,
          message: "Failed to add to cart. Please try again.",
          severity: "error",
        });
      }
    }
  };

  const totalItems = totalQuantity.reduce((a, b) => a + b, 0);

  if (loading) {
    return (
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#FCFAF8'
      }}>
        <CircularProgress size={60} sx={{ color: "#2E4265" }} />
        <Typography variant="h6" color="#2E4265">
          Loading menu...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ px: 2, py: 2, minHeight: '100vh', backgroundColor: '#FCFAF8' }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4, mt: 2 }}>
        <Box sx={{ width: 120 }} />
        <Typography variant="h4" sx={{ fontFamily: "'Poppins', sans-serif", color: "#2E4265", fontWeight: "bold", textAlign: "center", flexGrow: 1 }}>
          L'heure bleue
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: 120, justifyContent: "flex-end" }}>
          <Box sx={{ position: "relative" }}>
            <IconButton onClick={() => router.push("/cart")} sx={{ color: "#2E4265" }}>
              <ShoppingCartIcon fontSize="large" />
            </IconButton>
            {cartCount > 0 && (
              <Box sx={{ 
                position: "absolute", 
                top: -5, 
                right: -5, 
                backgroundColor: "#2E4265", 
                color: "white", 
                borderRadius: "50%", 
                minWidth: 20, 
                height: 20, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                fontSize: "0.75rem", 
                fontWeight: "bold", 
                px: 0.5 
              }}>
                {cartCount}
              </Box>
            )}
          </Box>
          <IconButton onClick={() => router.push("/")} sx={{ color: "#2E4265" }}>
            <HomeIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>

      {/* Menu Grid or Empty State */}
      {menuItems.length > 0 ? (
        <Box sx={{ 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, 
          gap: 3, 
          justifyItems: "center" 
        }}>
          {menuItems.map((item, index) => (
            <MenuCard
              key={item.item_id || index}
              title={item.item_name}
              price={item.price}
              image={item.image_url || `/default-coffee.png`}
              big={item.item_name === "Mocha"}
              quantity={totalQuantity[index]}
              onQuantityChange={(q) => handleQuantityChange(index, q)}
              onOrder={() => handleAddToCart(item, totalQuantity[index])}
            />
          ))}
        </Box>
      ) : (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '50vh',
          flexDirection: 'column',
          gap: 2
        }}>
          <Typography variant="h5" color="#2E4265" sx={{ textAlign: 'center' }}>
            No menu items available
          </Typography>
          <Typography variant="body1" color="#666" sx={{ textAlign: 'center' }}>
            Please check if the menu API is working correctly.
          </Typography>
        </Box>
      )}

      {/* Snackbar */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={3000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })} 
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity} 
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}