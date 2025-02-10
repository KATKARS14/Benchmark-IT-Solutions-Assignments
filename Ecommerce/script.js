document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const searchBtn = document.getElementById("search-btn");
    const cartBtn = document.getElementById("cart-btn");
    const loginBtn = document.getElementById("login-btn");

    const searchForm = document.querySelector(".search-form");
    const shoppingCart = document.querySelector(".shopping-cart");
    const loginForm = document.querySelector(".login-form");

    // Toggle Search Form
    searchBtn.addEventListener("click", () => {
        searchForm.style.display = searchForm.style.display === "block" ? "none" : "block";
        shoppingCart.style.display = "none";
        loginForm.style.display = "none";
    });

    // Toggle Shopping Cart
    cartBtn.addEventListener("click", () => {
        shoppingCart.style.display = shoppingCart.style.display === "block" ? "none" : "block";
        searchForm.style.display = "none";
        loginForm.style.display = "none";
    });

    // Toggle Login Form
    loginBtn.addEventListener("click", () => {
        loginForm.style.display = loginForm.style.display === "block" ? "none" : "block";
        searchForm.style.display = "none";
        shoppingCart.style.display = "none";
    });

    // Close forms if clicked outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".icons") && !event.target.closest(".search-form") && !event.target.closest(".shopping-cart") && !event.target.closest(".login-form")) {
            searchForm.style.display = "none";
            shoppingCart.style.display = "none";
            loginForm.style.display = "none";
        }
    });
});


let cart = [];

// Function to fetch products from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to display products 
function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart('${product.title}', ${product.price})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to add products to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();

    // Display a confirmation message
    const message = document.createElement("div");
    message.textContent = `${name} added to cart!`;
    message.style.position = "fixed";
    message.style.bottom = "20px";
    message.style.right = "20px";
    message.style.background = "green";
    message.style.color = "white";
    message.style.padding = "10px";
    message.style.borderRadius = "5px";
    message.style.zIndex = "1000";

    document.body.appendChild(message);

    // Remove the message after 2 seconds
    setTimeout(() => {
        document.body.removeChild(message);
    }, 2000);
}


// Function to update 
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    let total = 0;
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
            <button onclick="removeFromCart(${index})">❌</button>`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('total').textContent = total.toFixed(2);
    document.querySelector(".shopping-cart").style.display = "block";
}

// Function to remove item from cart and keep it open
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item
    updateCart(); // Refresh cart display
}



fetchProducts();
