import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Product } from "../types";

const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
    const url = category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    const { data } = await axios.get<Product[]>(url); // Explicitly specify type
    return data;
};

const Categories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category") || "all";

    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ["products", category],
        queryFn: () => fetchProductsByCategory(category),
    });

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchParams({ category: e.target.value });
    };

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products.</p>;

    return (
        <div>
            <h2>Product Categories</h2>
            <select onChange={handleCategoryChange} value={category}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
            <ul>
                {products.map((product) => (  // Now products is always defined
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Categories;
