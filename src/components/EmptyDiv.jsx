import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function EmptyDiv() {
  return (
    <Container className="center">
      <Box pt={1}>
        <h3>
          Nothing to display. Add one <Link to={"/todo-app/create"}>here.</Link>
        </h3>
      </Box>
    </Container>
  );
}

export default EmptyDiv;
