"use client";

import { Card, CardContent, Typography, Box, Button, IconButton, Snackbar, Alert } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

export default function MenuCard({ title, price, image, big, quantity, onQuantityChange, onOrder }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleIncrease = () => {
    if (quantity < 20) {
      const newQuantity = quantity + 1;
      onQuantityChange(newQuantity);
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 0);
    onQuantityChange(newQuantity);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <>
      <Card
        sx={{
          width: 380,
          height: 430,
          borderRadius: 20,
          textAlign: 'center',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          border: '1px solid #2E4265',
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          transition: "transform 0.2s",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
          },
        }}
      >
        {/* Coffee Image - Circular */}
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: 210,
            height: 210,
            borderRadius: '50%',
            objectFit: 'cover',
            mb: 1.5,
          }}
          onError={(e) => {
            e.target.src = '/default-coffee.png';
          }}
        />

        {/* Title and Price */}
        <Typography 
          variant="h6" 
          fontWeight="bold" 
          sx={{ color: "#2E4265", fontFamily: "'Poppins', sans-serif" }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "#2E4265", fontWeight: "bold" }}>
          ${price}
        </Typography>

        {/* Quantity Stepper */}
        <Box
          sx={{
            width: 224,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #2E4265',
            borderRadius: '30px',
            mt: 2,
            px: 1,
          }}
        >
          <IconButton 
            size="small" 
            onClick={handleDecrease}
            disabled={quantity === 0}
            sx={{ color: "#2E4265" }}
          >
            <Remove fontSize="small" />
          </IconButton>

          <Box
            sx={{
              width: 59,
              height: 39,
              mx: 2,
              border: '1px solid #2E4265',
              borderRadius: '17.5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', color: "#2E4265" }}>{quantity}</Typography>
          </Box>

          <IconButton 
            size="small" 
            onClick={handleIncrease}
            sx={{ color: "#2E4265" }}
          >
            <Add fontSize="small" />
          </IconButton>
        </Box>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          onClick={() => onOrder(quantity)}
          disabled={quantity === 0}
          sx={{
            marginTop: 2,
            backgroundColor: "#2E4265",
            color: "white",
            borderRadius: "25px",
            padding: "10px 30px",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#1E3265" },
            "&:disabled": { 
              backgroundColor: "#E0E0E0", 
              color: "#9E9E9E",
              cursor: "not-allowed" 
            },
          }}
        >
          Add to Cart
        </Button>
      </Card>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
          You have reached the maximum order quantity of 20.
        </Alert>
      </Snackbar>
    </>
  );
}