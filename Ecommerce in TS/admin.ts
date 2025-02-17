// admin.ts
import { fetchProducts, deleteProduct, updateProduct } from './api';

const productListAdmin = document.getElementById('product-list-admin')!;

export async function fetchAdminProducts() {
    const products = await fetchProducts();
    displayAdminProducts(products);
}

function displayAdminProducts(products: any[]) {
    productListAdmin.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <button onclick="deleteProductHandler(${product.id})">Delete</button>
            <button onclick="editProductHandler(${product.id})">Edit</button>
        `;
        productListAdmin.appendChild(productDiv);
    });
}

async function deleteProductHandler(productId: number) {
    await deleteProduct(productId);
    fetchAdminProducts();  // Reload product list after deletion
}

async function editProductHandler(productId: number) {
    // Implement the logic to edit the product
    const product = { name: 'Updated Product', description: 'Updated description' };
    await updateProduct(productId, product);
    fetchAdminProducts();  // Reload product list after update
}
