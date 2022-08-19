import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URLS } from "../constants";
import { getItem, setItem } from "../utils/storageHelper";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const rawUsername = username.trim();
    const rawPassword = password.trim();
    
    // TODO - validate
    const users = getItem("users") ?? [];
    const id = users.length + 1;

    const user = {
      id,
      username,
      password,
      role: "user",
    };
    users.push(user);
    setItem("users", users);
    alert("Account created");
    navigate(URLS.login);
  };

  return (
    <Box pt={1}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={2}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
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
                <Button type="submit">Sign up</Button>
              </Grid>
              <Grid item xs={12}>
                <Link to={"/user-portal/login"}>Already have an account?</Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup;
