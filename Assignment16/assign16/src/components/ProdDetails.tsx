import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types";

const fetchProduct = async (id: string): Promise<Product> => {
    const { data } = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
    return data;
};

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading, error } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProduct(id!),
    });

    if (isLoading) return <p>Loading product...</p>;
    if (error) return <p>Error loading product.</p>;

    return (
        <div>
            <h2>{product?.title}</h2>
            <p>{product?.description}</p>
            <p>Price: ${product?.price}</p>
        </div>
    );
};

export default ProductDetails;