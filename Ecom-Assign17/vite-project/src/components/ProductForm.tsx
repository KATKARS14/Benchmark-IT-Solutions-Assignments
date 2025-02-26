import { useState } from "react";
import { Product } from "../types/Product";
import { Button, Input } from "@shadcn/ui";

interface ProductFormProps {
    product?: Product;
    onSubmit: (product: Product) => void;
    onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onClose }) => {
    const [formData, setFormData] = useState<Product>(product ?? { id: 0, title: "", price: 0, image: "", category: "" });

    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">{product ? "Edit Product" : "Add Product"}</h2>
            <Input placeholder="Title" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
            <Input placeholder="Price" type="number" value={formData.price} onChange={e => setFormData({ ...formData, price: Number(e.target.value) })} />
            <Input placeholder="Image URL" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} />
            <Button onClick={() => onSubmit(formData)}>Save</Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </div>
    );
};

export default ProductForm;
