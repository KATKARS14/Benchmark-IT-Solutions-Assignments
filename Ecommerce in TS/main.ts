// main.ts
import { fetchProducts } from './api';
import { addToCart } from './cart';

const productList = document.getElementById('product-list')!;

async function init() {
    const products = await fetchProducts();
    displayProducts(products);
}

function displayProducts(products: any[]) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button onclick="addToCartHandler(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCartHandler(productId: number) {
    addToCart(productId);
}

init();
