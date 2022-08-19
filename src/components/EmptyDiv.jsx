import { Box, Container } from "@mui/material";
import React from "react";

function EmptyDiv() {
  return (
    <Container className="center">
      <Box pt={1}>
        <h3>Nothing to display.</h3>
      </Box>
    </Container>
  );
}

export default EmptyDiv;
