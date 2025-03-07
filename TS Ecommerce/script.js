var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const categoryFilter = document.getElementById("category-filter");
    const sortProducts = document.getElementById("sort-products");
    const cartBadge = document.getElementById("cart-badge");
    let allProducts = [];
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    function updateCartBadge() {
        if (cart.length > 0) {
            cartBadge.textContent = cart.length.toString();
            cartBadge.style.display = "flex";
        }
        else {
            cartBadge.style.display = "none";
        }
    }
    function fetchProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://fakestoreapi.com/products");
                allProducts = yield response.json();
                displayProducts(allProducts);
                populateCategories();
                updateCartBadge();
            }
            catch (error) {
                console.error("Error fetching products:", error);
            }
        });
    }
    function displayProducts(products) {
        productList.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }
    function populateCategories() {
        const categories = [...new Set(allProducts.map(p => p.category))];
        categoryFilter.innerHTML = `<option value="all">All Categories</option>`;
        categories.forEach(category => {
            categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
        });
    }
    categoryFilter.addEventListener("change", () => {
        const selectedCategory = categoryFilter.value;
        const filteredProducts = selectedCategory === "all"
            ? allProducts
            : allProducts.filter(p => p.category === selectedCategory);
        displayProducts(filteredProducts);
    });
    sortProducts.addEventListener("change", () => {
        const sortValue = sortProducts.value;
        let sortedProducts = [...allProducts];
        if (sortValue === "price-asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        }
        else if (sortValue === "price-desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        displayProducts(sortedProducts);
    });
    function addToCart(id, title, price, image) {
        let cart = JSON.parse(localStorage.getItem("cart") || "[]");
        console.log("Cart before adding:", cart);
        const existingProduct = cart.find(item => item.id === id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        }
        else {
            cart.push({ id, title, price, image, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item Added to cart");
    }
    window.addToCart = addToCart;
    fetchProducts();
});
