import { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import { Button, Select, Card, Image, Text } from "@shadcn/ui";
import ProductForm from "./ProductForm";

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [showAddForm, setShowAddForm] = useState<boolean>(false);
    const [currentProduct, setCurrentProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(data => setProducts(data));

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(setCategories);
    }, []);

    const handleAddProduct = (newProduct: Product) => {
        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(product => setProducts([...products, product]));
    };

    const handleDeleteProduct = (id: number) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter(prod => prod.id !== id));
        }
    };

    return (
        <div className="p-4">
            <Select
                value={selectedCategory}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCategory(e.target.value)}
                options={[{ label: "All Categories", value: "" }, ...categories.map(cat => ({ label: cat, value: cat }))]}
            />
            <Button onClick={() => setShowAddForm(true)}>Add Product</Button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {products.map(product => (
                    <Card key={product.id} className="p-4 shadow-lg">
                        <Image src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                        <Text>{product.title}</Text>
                        <Text>${product.price}</Text>
                        <Button onClick={() => handleDeleteProduct(product.id)}>Delete</Button>
                    </Card>
                ))}
            </div>
            {showAddForm && <ProductForm onSubmit={handleAddProduct} onClose={() => setShowAddForm(false)} />}
        </div>
    );

}

