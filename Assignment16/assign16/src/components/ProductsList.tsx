import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import { Product } from "../types";

const fetchProducts = async (): Promise<Product[]> => {
    const { data } = await axios.get<Product[]>("https://fakestoreapi.com/products");
    return data;
};


const ProductsList = () => {
    const { data: products = [], isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error loading products.</p>;

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default ProductsList;