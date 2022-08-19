import { Box, Container } from "@mui/material";
import React from "react";
import { getItem } from "../utils/storageHelper";

import "./../App.css";

function Dashboard() {
  const user = getItem("currentSession")
  return (
    <Box m={3}>
      <Container component="main" maxWidth="xs">
        {
        `Hello ${user.username}`
        }
      </Container>
    </Box>
  );
}

export default Dashboard;
