import { Box } from "@mui/material";
import React from "react";
import { getItem } from "../utils/storageHelper";

function Dashboard() {
  const user = getItem("currentSession");
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
      p={10}
    >
      <h1>{`Hello ${user.username}`}</h1>
    </Box>
  );
}

export default Dashboard;
