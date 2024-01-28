import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  FeatureCard
} from "@mui/material";

function Homepage() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Workout Tracker</Typography>
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
      <h1>CROSS FLEX FITNESS!!!</h1>
      
     
    </div>
  );
}

export default Homepage;
