import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationUser from "./pages/LoginPage/RegistrationUser.jsx";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import "./index.scss";

const App = () => {
  return (
    <>
      <header>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color={"secondary"}>
            <Link to="/">Login</Link>
          </Button>
          <Button color={"secondary"}>
            <Link to="/registration">Registration</Link>
          </Button>
        </ButtonGroup>
      </header>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationUser />} />
      </Routes>
    </>
  );
};
export default App;
