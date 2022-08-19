import { Box } from "@mui/material";
import React from "react";

function EmptyDiv() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} p={3}>
      <h3>Nothing to display.</h3>
    </Box>
  );
}

export default EmptyDiv;
