import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Container,
  CssBaseline,
  Avatar,
  Box,
  Grid,
} from "@mui/material";
import axios from "axios"
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    try {
      const user_register_response = await axios.post(`${process.env.REACT_APP_SERVER_PORT}/register`, form)
      console.log(user_register_response)
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#1e88e5" }}>
        <Toolbar>
          <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <FitnessCenterIcon style={{ marginRight: 1 }} />
            <Typography variant="h6">Workout Tracker</Typography>
          </div>
          <Button color="inherit" component={Link} to="/" sx={{ marginLeft: 2 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ marginLeft: 2 }}>
            About
          </Button>
          <Button color="inherit" component={Link} to="/contact" sx={{ marginLeft: 2 }}>
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/register" sx={{ marginLeft: 2 }}>
            Register
          </Button>
          <Button color="inherit" component={Link} to="/login" sx={{ marginLeft: 2 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1e88e5" }}>
            {/* You can add an icon or image for the Avatar */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                  value={form.firstname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="lname"
                  name="lastname"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  value={form.lastname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={form.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  name="password"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  name="confirmpassword"
                  required
                  fullWidth
                  id="confirmpassword"
                  label="Confirm Password"
                  type="password"
                  value={form.confirmpassword}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Register;
