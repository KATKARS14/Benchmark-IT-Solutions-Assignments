import React from "react";
import { useAppContext } from "../context/AppContext";

const Login: React.FC = () => {
    const { dispatch } = useAppContext();
    const handleLogin = () => {
        dispatch({ type: "LOGIN", payload: { username: "admin" } });
    };
    return <button onClick={handleLogin}>Login as Admin</button>;
};

export default Login;