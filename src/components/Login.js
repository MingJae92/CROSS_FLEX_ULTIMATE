import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ()=>{
    


    // Add your login logic here
    console.log("Logging in with:", username, password);
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

      <Container component="main" maxWidth="xs" style={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Paper elevation={3} style={{ padding: 16, width: "100%" }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form style={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
              style={{ marginTop: 16 }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
