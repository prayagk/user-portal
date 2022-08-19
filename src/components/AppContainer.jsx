import { Box, Container, Paper } from "@mui/material";
import React from "react";

function AppContainer({ children }) {
  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={1}>
        <Box sx={{ backgroundColor: "#e6eaeb" }} mt={10}>
          {children}
        </Box>
      </Paper>
    </Container>
  );
}

export default AppContainer;
