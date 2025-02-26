import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 text-white p-4 flex justify-between">
            <Link to="/" className="text-lg font-bold">Home</Link>
            <Link to="/cart" className="text-lg">Cart</Link>
            <Link to="/profile" className="text-lg">Profile</Link>
        </nav>
    );
};

export default Navbar;