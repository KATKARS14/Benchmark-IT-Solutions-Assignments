// cart.ts
interface CartItem {
    productId: number;
    quantity: number;
}

let cart: CartItem[] = [];

export function addToCart(productId: number): void {
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ productId, quantity: 1 });
    }
    console.log('Cart:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function getCartItems(): CartItem[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
}
