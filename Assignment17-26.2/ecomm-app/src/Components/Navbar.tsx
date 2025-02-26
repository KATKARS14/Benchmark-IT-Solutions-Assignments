//import { Button, Select, Card, Image, Text, Modal, Input } from "@shadcn/ui";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <Text variant="h1">E-Shop</Text>
            <div className="space-x-4">
                <Link to="/">
                    <Button variant="primary">Products</Button>
                </Link>
                <Link to="/cart">
                    <Button variant="primary">Cart</Button>
                </Link>
                <Link to="/profile">
                    <Button variant="primary">Profile</Button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;