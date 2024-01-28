import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function About() {
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
      <h1>About</h1>
      <Typography variant="h4">About Us</Typography>
      <p>This is the About page content. Provide information about your workout app here.</p>
    </div>
  );
}

export default About;
