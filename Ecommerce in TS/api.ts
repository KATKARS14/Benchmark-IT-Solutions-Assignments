// api.ts
const apiUrl = 'https://api.example.com/products';

export async function fetchProducts(): Promise<any[]> {
    const response = await fetch(apiUrl);
    const products = await response.json();
    return products;
}

export async function deleteProduct(productId: number): Promise<void> {
    await fetch(`${apiUrl}/${productId}`, { method: 'DELETE' });
}

export async function addProduct(product: any): Promise<void> {
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
}

export async function updateProduct(productId: number, product: any): Promise<void> {
    await fetch(`${apiUrl}/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
}
