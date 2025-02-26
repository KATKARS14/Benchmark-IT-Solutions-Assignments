//import { Button, Select, Card, Image, Text, Modal, Input } from "@shadcn/ui";
import { Product } from "../types/Product";
import { useState } from "react";

interface ProductFormProps {
    product?: Product;
    onSubmit: (product: Product) => void;
    onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onClose }) => {
    const [formData, setFormData] = useState<Product>(product || { title: "", price: 0, category: "", image: "", id: 0 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Modal title={product ? "Update Product" : "Add Product"} onClose={onClose}>
            <Input name="title" value={formData.title} onChange={handleChange} placeholder="Title" />
            <Input name="price" value={String(formData.price)} onChange={handleChange} placeholder="Price" />
            <Input name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
            <Input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
            <Button onClick={() => onSubmit(formData)}>Submit</Button>
        </Modal>
    );
};

const Cart: React.FC = () => <div className="p-4">Cart Page</div>;
const Profile: React.FC = () => <div className="p-4">Profile Page</div>;

export default ProductForm;