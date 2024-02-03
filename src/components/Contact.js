import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, TextField, Grid, createTheme, ThemeProvider } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

// Create a dark-themed custom theme
const theme = createTheme({
  palette: {
    type: 'dark', // Use dark theme
    primary: {
      main: "#2196F3", // Dark blue primary color
    },
    secondary: {
      main: "#FF4081", // Pink secondary color
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      marginBottom: 2,
      padding: '16px', // Add padding around Typography
    },
  },
});

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <FitnessCenterIcon style={{ marginRight: 1 }} />
              <Typography variant="h6">Workout Tracker</Typography>
            </div>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ marginTop: 4, width: "20vw" }}>
          <Typography variant="h4">Contact Us</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Submit
            </Button>
          </form>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default Contact;
