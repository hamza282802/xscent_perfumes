let cart = [];
let total = 0;

function addToCart(productName, price) {
    // Add product to cart array
    cart.push({ productName, price });
    total += price;

    // Update cart display
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear cart display
    cartItems.innerHTML = '';

    // Display updated cart
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update total
    cartTotal.textContent = total.toFixed(2);
}
