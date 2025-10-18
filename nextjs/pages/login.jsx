"use client";

import React, { useState } from "react";
import { TextField, Button, Grid, Typography, FormControlLabel, Checkbox, Link, Snackbar, Alert } from '@mui/material';
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

export default function LoginPage() {
  const router = useRouter();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      Swal.fire({ title: "Error", text: 'Please enter email and password', icon: "error" });
      return;
    }

    // ✅ Email validation with regex (strict check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
      Swal.fire({ title: "Error", text: 'Please enter a valid email address', icon: "error" });
      return;
    }

    if (!acceptTerms) {
      Swal.fire({ title: "Warning", text: 'Please accept the Terms and Conditions', icon: "warning" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8008/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password_hash: loginPassword
        })
      });
      
      console.log("Login response status:", res.status);
      
      const result = await res.json();
      console.log("Login response data:", result);
      
      if (!res.ok) throw new Error(result.detail || "Login failed");
      
      Swal.fire({ 
        title: "Success!", 
        text: "Login successful!", 
        icon: "success" 
      });

      // ✅ Store both user data AND token in localStorage
      localStorage.setItem('user', JSON.stringify({
        user_id: result.user_id,
        username: result.username,
        email: result.email
      }));
      
      // ✅ Store token for API authentication (using user_id as token for now)
      localStorage.setItem('token', result.user_id?.toString() || '1');
      console.log("Stored token:", localStorage.getItem('token'));

      setTimeout(() => {
        router.push("/menu"); // main page
      }, 1000);
      
    } catch (err) {
      console.error("Login error:", err);
      Swal.fire({ title: "Error", text: err.message, icon: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <Grid
      container
      style={{
        minHeight: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFAF8',
      }}
    >
      <Grid item>
        <form
          onSubmit={handleLoginSubmit}
          style={{
            width: 636,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Heading */}
          <Typography
            variant="h2"
            style={{
              fontFamily: "'Poppins', sans-serif",
              color: "#2E4265",
              marginBottom: 40,
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(1, 1, 1, 0.2)",
            }}
          >
            L'heure bleue
          </Typography>

          {/* Email & Password */}
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            margin="normal"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            sx={{ height: 56 }}
            disabled={loading}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            sx={{ height: 56 }}
            disabled={loading}
          />

          {/* Checkboxes and Forgot password */}
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            style={{ marginTop: 10 }}
          >
            <Grid item xs={10}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    disabled={loading}
                  />
                }
                label="I accept the Terms and Conditions"
                sx={{ color: "#2E4265" }}
              />
            </Grid>

            <Grid item>
              <FormControlLabel
                control={<Checkbox disabled={loading} />}
                label="Remember password"
                sx={{ color: "#2E4265" }}
              />
            </Grid>

            <Grid item>
              <Link href="#" underline="hover" sx={{ cursor: 'pointer' }}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>

          {/* Buttons side by side */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
            style={{ marginTop: 30 }}
          >
            <Grid item>
              <Button
                type="submit"
                disabled={loading}
                sx={{
                  height: 56,
                  width: 167,
                  fontWeight: 'bold',
                  borderRadius: '80px',
                  backgroundColor: '#2E4265',
                  color: '#FFFFFF',
                  '&:hover': { backgroundColor: '#8C9EBE', color: '#2E4265' },
                  '&:disabled': { backgroundColor: '#CCCCCC' }
                }}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </Grid>
            <Grid item>
              <Button
                onClick={handleRegister}
                disabled={loading}
                sx={{
                  height: 56,
                  width: 167,
                  fontWeight: 'bold',
                  borderRadius: '80px',
                  backgroundColor: '#8C9EBE',
                  color: '#2E4265',
                  '&:hover': { backgroundColor: '#2E4265', color: '#FFFFFF' },
                  '&:disabled': { backgroundColor: '#CCCCCC' }
                }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}