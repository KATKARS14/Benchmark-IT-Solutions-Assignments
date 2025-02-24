import React from "react";
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const Admin: React.FC = () => {
    const { state } = useAppContext();
    return state.user ? <h1>Admin Panel</h1> : <Navigate to="/login" />;
};

export default Admin;
