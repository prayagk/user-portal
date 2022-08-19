import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import EmptyDiv from "../components/EmptyDiv";
import { ROLES } from "../constants";
import { getItem } from "../utils/storageHelper";

function Admin() {
  const users = getItem("users").filter((user) => user.role === ROLES.user);

  return (
    <Box pt={1}>
      <Container component="main" maxWidth="xs">
        {!users.length ? (
          <EmptyDiv />
        ) : (
          <>
            <Box px={2} sx={{ display: "flex", justifyContent: "center" }}>
              <h2 style={{ textDecoration: "underline" }}>Users</h2>
            </Box>
            <Box px={3}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell align={"center"}>No.</TableCell>
                      <TableCell align={"center"}>Username</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user, index) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={user.id}
                        >
                          <TableCell align={"center"}>{index + 1}</TableCell>
                          <TableCell align={"center"}>
                            {user.username}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default Admin;
