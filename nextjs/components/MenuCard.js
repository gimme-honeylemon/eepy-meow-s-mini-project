"use client";

import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Button, 
  IconButton, 
  Snackbar, 
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip
} from "@mui/material";
import { Add, Remove, ShoppingCart } from "@mui/icons-material";
import { useState } from "react";

export default function MenuCard({ title, price, image, big, quantity, onQuantityChange, onOrder }) {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openCustomizeDialog, setOpenCustomizeDialog] = useState(false);
  const [customization, setCustomization] = useState({
    size: 'regular',
    temperature: 'hot',
    specialInstructions: ''
  });

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

  const handleCustomizeClick = () => {
    if (quantity === 0) {
      setOpenSnackbar(true);
      return;
    }
    setOpenCustomizeDialog(true);
  };

  const handleCustomizeClose = () => {
    setOpenCustomizeDialog(false);
    setCustomization({
      size: 'regular',
      temperature: 'hot',
      specialInstructions: ''
    });
  };

  const handleAddToCart = () => {
    onOrder(quantity, customization);
    handleCustomizeClose();
  };

  const getSizePrice = () => {
    const sizeMultipliers = {
      'small': 0.8,
      'regular': 1.0,
      'large': 1.3,
      'extra-large': 1.6
    };
    return (price * sizeMultipliers[customization.size]).toFixed(2);
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
          onClick={handleCustomizeClick}
          disabled={quantity === 0}
          startIcon={<ShoppingCart />}
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
          Customize & Add to Cart
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

      {/* Customization Dialog */}
      <Dialog 
        open={openCustomizeDialog} 
        onClose={handleCustomizeClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        <DialogTitle sx={{ 
          fontFamily: "'Poppins', sans-serif", 
          color: "#2E4265", 
          fontWeight: "bold",
          textAlign: "center"
        }}>
          Customize Your {title}
        </DialogTitle>
        
        <DialogContent sx={{ padding: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            {/* Size Selection */}
            <FormControl fullWidth>
              <InputLabel>Size</InputLabel>
              <Select
                value={customization.size}
                label="Size"
                onChange={(e) => setCustomization({...customization, size: e.target.value})}
              >
                <MenuItem value="small">Small (+$0.00)</MenuItem>
                <MenuItem value="regular">Regular (+$0.00)</MenuItem>
                <MenuItem value="large">Large (+${(price * 0.3).toFixed(2)})</MenuItem>
                <MenuItem value="extra-large">Extra Large (+${(price * 0.6).toFixed(2)})</MenuItem>
              </Select>
            </FormControl>

            {/* Temperature Selection */}
            <FormControl fullWidth>
              <InputLabel>Temperature</InputLabel>
              <Select
                value={customization.temperature}
                label="Temperature"
                onChange={(e) => setCustomization({...customization, temperature: e.target.value})}
              >
                <MenuItem value="hot">🔥 Hot</MenuItem>
                <MenuItem value="warm">🌡️ Warm</MenuItem>
                <MenuItem value="cold">❄️ Cold</MenuItem>
                <MenuItem value="iced">🧊 Iced</MenuItem>
              </Select>
            </FormControl>

            {/* Special Instructions */}
            <TextField
              fullWidth
              label="Special Instructions"
              placeholder="e.g., Extra shot, No foam, Decaf, Extra hot..."
              multiline
              rows={3}
              value={customization.specialInstructions}
              onChange={(e) => setCustomization({...customization, specialInstructions: e.target.value})}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />

            {/* Price Summary */}
            <Box sx={{ 
              backgroundColor: '#F5F5F5', 
              padding: 2, 
              borderRadius: 2,
              border: '1px solid #E0E0E0'
            }}>
              <Typography variant="h6" sx={{ color: "#2E4265", fontWeight: "bold", textAlign: "center" }}>
                Total: ${getSizePrice()} × {quantity} = ${(getSizePrice() * quantity).toFixed(2)}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
                <Chip label={`${customization.size} size`} size="small" />
                <Chip label={customization.temperature} size="small" />
                {customization.specialInstructions && (
                  <Chip label="Custom" size="small" color="primary" />
                )}
              </Box>
            </Box>
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ padding: 3, gap: 2 }}>
          <Button 
            onClick={handleCustomizeClose}
            sx={{ 
              color: "#666",
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleAddToCart}
            variant="contained"
            sx={{ 
              backgroundColor: "#2E4265",
              color: "white",
              borderRadius: "20px",
              padding: "8px 24px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1E3265" }
            }}
          >
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}