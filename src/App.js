import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { initializeAdmin } from "./utils/storageHelper";
import PrivateRoute from "./utils/PrivateRoute";
import { URLS } from "./constants";

const theme = createTheme();
initializeAdmin();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div
        style={{
          height: "100vh",
          paddingTop: 20,
        }}
      >
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path={URLS.dashboard} element={<Dashboard />} />
            <Route path={URLS.admin} element={<Admin />} />
          </Route>
          <Route path={URLS.login} element={<Login />} />
          <Route path={URLS.signup} element={<Signup />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
