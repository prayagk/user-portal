import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROLES, URLS } from "../constants";
import { getItem, setItem } from "../utils/storageHelper";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // TODO - validate
    const users = getItem("users");
    console.log("🚀 ~ onSubmitHandler ~ users", users);
    console.log(username, password);
    const user = users.filter(
      (user) => user.username === username && user.password === password
    )[0];

    if (!user) {
      alert("User not found");
      return;
    }

    setItem("currentSession", {
      isLoggedIn: true,
      id: user.id,
      username: user.username,
    });

    if (user.role === ROLES.admin) {
      navigate(URLS.admin);
    } else {
      navigate(URLS.dashboard);
    }
    //TODO - check ROLES
  };

  return (
    <Box pt={1}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={2}>
          <Box
            component="form"
            sx={{
              textAlign: "center",
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmitHandler}
          >
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  label="Username"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={(e) => setPassword(e.target.value)}
                type={"password"}
                value={password}
                label="Password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit">Login</Button>
            </Grid>
            <Link to={"/user-portal/signup"}>Signup</Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;
