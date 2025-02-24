import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Admin from "./components/Admin";
import { AppProvider } from "./context/AppContext";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;