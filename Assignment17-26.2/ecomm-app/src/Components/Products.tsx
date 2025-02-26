import { useEffect, useState } from "react";
import { Product } from "../types/Product";
//import { Button, Select, Card, Image, Text, Input } from "@shadcn/ui";
import ProductForm from "./ProductForm";

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [showUpdateForm, setShowUpdateForm] = useState<boolean>(false);
    const [showAddForm, setShowAddForm] = useState<boolean>(false);
    const [currentProduct, setCurrentProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
                fetch('https://fakestoreapi.com/products/categories')
                    .then(res => res.json())
                    .then((catData) => setCategories(catData));
            });
    }, []);

    const handleAddProduct = (newProduct: Product) => {
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((product) => setProducts([...products, product]));
    };

    const handleDeleteProduct = (id: number) => {
        if (window.confirm("ARE YOU SURE YOU WANT TO DELETE THIS PRODUCT?")) {
            fetch(`https://fakestoreapi.com/products/${id}`, {
                method: "DELETE"
            })
                .then(() => setProducts(products.filter((prod) => prod.id !== id)));
        }
    };

    const handleUpdateProduct = (updatedProduct: Product) => {
        fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedProduct),
        })
            .then((res) => res.json())
            .then((product) => {
                setProducts(products.map((p) => (p.id === product.id ? product : p)));
                setShowUpdateForm(false);
            });
    };

    return (
        <div>
            <div className="p-4">
                <Select
                    value={selectedCategory}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
                    options={[{ label: "All Categories", value: "" }, ...categories.map((category) => ({ label: category, value: category }))]}
                />
                <Button variant="primary" onClick={() => setShowAddForm(true)} className="ml-4">Add New Product</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {products.map((product) => (
                    <Card key={product.id} className="p-4 shadow rounded-lg">
                        <Image src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                        <Text variant="h2">{product.title}</Text>
                        <Text>${product.price}</Text>
                        <Button variant="primary" onClick={() => { setCurrentProduct(product); setShowUpdateForm(true); }}>Update</Button>
                        <Button variant="danger" onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                    </Card>
                ))}
            </div>
            {showAddForm && <ProductForm onSubmit={handleAddProduct} onClose={() => setShowAddForm(false)} />}
            {showUpdateForm && <ProductForm product={currentProduct ?? undefined} onSubmit={handleUpdateProduct} onClose={() => setShowUpdateForm(false)} />}
        </div>
    );
};

export default Products;
