import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROLES, URLS } from "../constants";
import { getItem, setItem } from "../utils/storageHelper";
import { useFormik } from "formik";
import { loginSchema } from "../utils/validationSchema";

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      onSubmitHandler(values);
    },
  });

  const onSubmitHandler = ({ username, password }) => {
    const users = getItem("users");
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
  };

  return (
    <Box
      p={3}
      component="form"
      sx={{
        textAlign: "center",
      }}
      onSubmit={formik.handleSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.username}
            name={"username"}
            label="Username"
            variant="outlined"
            error={formik.touched.username && Boolean(formik.errors.username)}
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
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link to={URLS.signup}>Signup</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
