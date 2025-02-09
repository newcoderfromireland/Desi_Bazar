// scripts/main.js

// Initialize an empty cart array
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
    console.error('Error loading cart from localStorage:', error);
    cart = [];
}

// Fetch products from the JSON file
let products = [];
fetch('data/products.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        products = data; // Store the fetched products
        displayProducts(); // Render the products on the page
        updateCartUI(); // Update the cart UI after products are loaded
        attachEventListeners(); // Attach event listeners after products are rendered
    })
    .catch(error => {
        console.error('Error loading products:', error);
        displayProducts([]); // Display "No products found" if there's an error
    });

// Function to dynamically generate product cards
function displayProducts(filteredProducts = products) {
    const productContainer = document.getElementById('product-container');
    if (!productContainer) return; // Exit if the container doesn't exist

    productContainer.innerHTML = ''; // Clear existing content
    if (!filteredProducts.length) {
        productContainer.innerHTML = '<p class="text-center text-gray-700">No products found.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const existingItem = cart.find(item => item.name === product.name);
        const quantity = existingItem ? existingItem.quantity : 0;

        const productCard = `
            <div class="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105">
                <img src="${product.image}" alt="${product.name}" class="mx-auto mb-4 rounded-md h-48 object-cover">
                <h3 class="text-xl font-bold text-orange-600">${product.name}</h3>
                <p class="text-gray-700 mb-4">${product.description}</p>
                <p class="text-gray-700 font-bold mb-4">€${product.price.toFixed(2)}</p>
                ${
                    quantity > 0
                        ? `
                            <div class="flex justify-center items-center space-x-2">
                                <button 
                                    class="bg-orange-600 text-white px-2 py-1 rounded hover:bg-orange-700 transition duration-300 update-quantity" 
                                    data-name="${product.name}" data-action="decrease">
                                    -
                                </button>
                                <span>${quantity}</span>
                                <button 
                                    class="bg-orange-600 text-white px-2 py-1 rounded hover:bg-orange-700 transition duration-300 update-quantity" 
                                    data-name="${product.name}" data-action="increase">
                                    +
                                </button>
                            </div>
                        `
                        : `
                            <button 
                                class="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition duration-300 add-to-cart" 
                                data-name="${product.name}">
                                Add to Cart
                            </button>
                        `
                }
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Attach event listeners for "Add to Cart" and quantity updates
function attachEventListeners() {
    document.addEventListener('click', (event) => {
        // Handle "Add to Cart" button clicks
        if (event.target && event.target.classList.contains('add-to-cart')) {
            const productName = event.target.dataset.name;
            const product = products.find(p => p.name === productName);
            if (product) {
                addToCart(product);
                showSuccessMessage(`${product.name} has been added to your cart!`);
            }
        }

        // Handle quantity updates
        if (event.target && event.target.classList.contains('update-quantity')) {
            const productName = event.target.dataset.name;
            const action = event.target.dataset.action;
            const product = cart.find(item => item.name === productName);
            if (action === 'increase') {
                product.quantity += 1;
            } else if (action === 'decrease' && product.quantity > 1) {
                product.quantity -= 1;
            } else if (action === 'decrease' && product.quantity === 1) {
                // Remove the item from the cart if quantity becomes 0
                const index = cart.findIndex(item => item.name === productName);
                cart.splice(index, 1);
            }
            saveCartToLocalStorage(); // Save cart to localStorage
            updateCartUI(); // Update the cart summary UI
            displayProducts(); // Re-render product cards to reflect changes
        }
    });
}

// Function to add a product to the cart
function addToCart(product) {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if the product is already in the cart
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new product to the cart
    }
    saveCartToLocalStorage(); // Save cart to localStorage
    updateCartUI(); // Update the cart summary UI
    displayProducts(); // Re-render product cards to reflect changes
}

// Function to save the cart to localStorage
function saveCartToLocalStorage() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
    }
}

// Function to update the cart summary UI
function updateCartUI() {
    const totalPriceElement = document.getElementById('cart-total-price');
    const totalWeightElement = document.getElementById('cart-total-weight');
    const cartItemsPreview = document.getElementById('cart-items-preview');
    const cartItemsList = document.getElementById('cart-items-list');

    let totalPrice = 0;
    let totalWeight = 0;

    cart.forEach(item => {
        const itemPrice = parseFloat(item.price) * item.quantity;
        const itemWeight = parseFloat(item.weight) * item.quantity;
        totalPrice += itemPrice;
        totalWeight += itemWeight;
    });

    if (totalPriceElement) {
        totalPriceElement.textContent = `Total Price: €${totalPrice.toFixed(2)}`;
    }
    if (totalWeightElement) {
        totalWeightElement.textContent = `Total Weight: ${totalWeight.toFixed(2)} kg`;
    }

    // Update cart items preview
    if (cart.length > 0) {
        cartItemsPreview.classList.remove('hidden'); // Show the preview
        cartItemsList.innerHTML = ''; // Clear existing content
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} (${item.quantity})`;
            cartItemsList.appendChild(listItem);
        });
    } else {
        cartItemsPreview.classList.add('hidden'); // Hide the preview if the cart is empty
    }
}

// Search functionality
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts); // Re-render products with filtering applied
});

// Go to Top Button Logic
const goToTopButton = document.getElementById('go-to-top');

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Show button after scrolling 200px
        goToTopButton.classList.remove('hidden');
    } else {
        goToTopButton.classList.add('hidden');
    }
});

// Smooth scroll to top when the button is clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});

// Function to show a success message as a popup
function showSuccessMessage(message) {
    const popup = document.createElement('div');
    popup.classList.add(
        'fixed',
        'top-4',
        'right-4',
        'bg-green-500',
        'text-white',
        'px-4',
        'py-2',
        'rounded',
        'shadow-lg',
        'z-50',
        'flex',
        'items-center',
        'space-x-2'
    );
    popup.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <span>${message}</span>
    `;
    document.body.appendChild(popup);
    // Automatically remove the popup after 3 seconds
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

// Checkout Form Submission Logic
const checkoutForm = document.getElementById('checkout-form');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const address = document.getElementById('address').value.trim();
        const eircode = document.getElementById('eircode').value.trim();

        if (!name || !email || !address || !eircode) {
            alert('Please fill out all fields.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Check if the user wants to subscribe to the newsletter
        const subscribeNewsletter = document.getElementById('subscribe-newsletter').checked;
        if (subscribeNewsletter) {
            // Simulate saving the email for newsletter notifications
            console.log(`User ${email} has opted in for newsletter notifications.`);
            alert(`Thank you! We'll notify you at ${email} when new products are added.`);
        }

        // Simulate order placement
        const orderNumber = Math.floor(100000 + Math.random() * 900000); // Generate random order number
        localStorage.removeItem('cart'); // Clear cart after order placement

        // Redirect to thank-you page
        window.location.href = `thank-you.html?orderNumber=${orderNumber}`;
    });
}
