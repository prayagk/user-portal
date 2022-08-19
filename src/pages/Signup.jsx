import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { URLS } from "../constants";
import { getItem, setItem } from "../utils/storageHelper";
import { useFormik } from "formik";
import { signupSchema } from "../utils/validationSchema";

function Signup() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      onSubmitHandler(values);
    },
  });

  const onSubmitHandler = ({ username, password }) => {
    // TODO - validate
    const users = getItem("users") ?? [];
    const id = users.length + 1;

    const isExist = users.filter((user) => user.username === username).length;
    if (isExist) {
      alert("Username already taken");
      return;
    }
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
            onSubmit={formik.handleSubmit}
          >
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  name={"username"}
                  label="Username"
                  variant="outlined"
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  type={"password"}
                  name={"password"}
                  value={formik.values.password}
                  label="Password"
                  variant="outlined"
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Sign up
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Link to={URLS.login}>Already have an account?</Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Signup;
