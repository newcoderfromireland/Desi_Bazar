// scripts/main.js

// Mock product data (replace this with your actual Excel data)
const products = [
  {
      productID: 1,
      name: "Aashirvaad Select Sharbati Atta",
      description: "Aashirvaad Select Sharbati Atta, 5 kg, Premium 100% MP Sharbati Wheat Atta for softer rotis",
      weight: 5.00,
      price: 4.10,
      image: "assets/images/Aashirvaad-Select-Sharbati-Atta.jpg"
  },
  {
      productID: 2,
      name: "Aashirvaad Superior MP Atta",
      description: "Aashirvaad Superior MP Atta, 10kg, 100% Whole Wheat Flour, 0% Maida",
      weight: 10.00,
      price: 7.14,
      image: "assets/images/Aashirvaad-Superior-MP-Atta.jpg"
  },
  {
      productID: 3,
      name: "Aashirvaad Atta with Multigrains",
      description: "Aashirvaad Atta with Multigrains, 1kg pack | High Fibre & High Protein Multigrain Atta | 6 Natural Grains",
      weight: 1.00,
      price: 1.01,
      image: "assets/images/Aashirvaad-Atta-with-Multigrains.jpg"
  },
  {
      productID: 4,
      name: "24 Mantra Organic – Whole Wheat Atta Premium",
      description: "24 Mantra Organic – Whole Wheat Atta Premium, 5Kg",
      weight: 5.00,
      price: 5.14,
      image: "assets/images/24_Mantra_Organic_Whole_Wheat_Atta_Premium.jpg"
  },
  {
      productID: 5,
      name: "Tata Sampann 100% Chana Dal Fine Besan",
      description: "Tata Sampann 100% Chana Dal Fine Besan, Gram Flour, 1 Kg",
      weight: 1.00,
      price: 1.64,
      image: "assets/images/Tata-Sampann-100%-Chana-Dal-Fine-Besan.jpg"
  },
  {
      productID: 6,
      name: "Pro Nature 100% Organic Besan",
      description: "Pro Nature 100% Organic Besan, 500g",
      weight: 0.50,
      price: 1.56,
      image: "assets/images/ProNature100%OrganicBesan.jpg"
  },
  {
      productID: 7,
      name: "Kamphal Corn Starch Powder 330 grams",
      description: "Kamphal Corn Starch Powder 330 grams | Baker's Corn Starch for Cooking, Baking, Skin",
      weight: 0.33,
      price: 2.34,
      image: "assets/images/KamphalCornStarchPowder330grams.jpg"
  },
  {
      productID: 8,
      name: "Fresh Produce Morechoice Corn Flour 500 Gm",
      description: "Fresh Produce Morechoice Corn Flour 500 Gm",
      weight: 0.50,
      price: 0.54,
      image: "assets/images/Fresh-Produce-Morechoice-Corn-Flour-500-Gm.jpg"
  },
  {
      productID: 9,
      name: "Brahmins Rice Powder, 1 kg",
      description: "Brahmins Rice Powder, 1 kg",
      weight: 1.00,
      price: 1.29,
      image: "assets/images/Brahmins-Rice-Powder-1 kg.jpg"
  },
  {
      productID: 10,
      name: "Nirapara Appam Idiyappam Podi, 1 kg",
      description: "Nirapara Appam Idiyappam Podi, 1 kg",
      weight: 1.00,
      price: 1.25,
      image: "assets/images/NiraparaAppamIdiyappamPodi1 kg.jpg"
  },
  {
      productID: 11,
      name: "Organic Tattva Suji, 500g",
      description: "Organic Tattva Suji, 500g",
      weight: 0.50,
      price: 0.87,
      image: "assets/images/OrganicTattvaSuji500g.jpg"
  },
  {
      productID: 12,
      name: "Daawat Rozana Super Basmati Rice 5Kg",
      description: "Daawat Rozana Super Basmati Rice 5Kg| For Everyday Consumption| Cooked Grain Upto 13mm*| Naturally Aged",
      weight: 5.00,
      price: 4.55,
      image: "assets/images/Daawat-Rozana-Super-Basmati-Rice-5Kg.jpg"
  },
  {
      productID: 13,
      name: "Daawat Rozana Gold Basmati Rice 5Kg",
      description: "Daawat Rozana Gold Basmati Rice 5Kg| For Everyday Consumption| Cooked Grain Upto 15mm*| Naturally Aged",
      weight: 5.00,
      price: 5.24,
      image: "assets/images/Daawat-Rozana-Gold-Basmati-Rice-5Kg.jpg"
  },
  {
      productID: 14,
      name: "India Gate Jeera Rice, 1kg",
      description: "India Gate Jeera Rice, 1kg",
      weight: 1.00,
      price: 1.68,
      image: "assets/images/IndiaGateJeeraRice1kg.jpg"
  },
  {
      productID: 15,
      name: "Pro Nature 100% Organic Sonamasoori Rice, 5kg",
      description: "Pro Nature 100% Organic Sonamasoori Rice, 5kg",
      weight: 5.00,
      price: 7.62,
      image: "assets/images/ProNature100%OrganicSonamasooriRice5kg.jpg"
  },
  {
      productID: 16,
      name: "Daawat Brown, Cooks in 15-minute",
      description: "Daawat Brown, Cooks in 15-minute, Full Bran Intact, Fibre-Rich Basmati Rice, 5 Kg",
      weight: 5.00,
      price: 9.75,
      image: "assets/images/Daawat-Brown-Cooks-in-15-minute.jpg"
  },
  {
      productID: 17,
      name: "24 Mantra Organic Sonamasuri Unpolished Rice Brown",
      description: "24 Mantra Organic Sonamasuri Unpolished Rice Brown/Brown Chawal - 5 Kg | Pack of 1 | 100% Organic | Chemical Free & Pesticides Free",
      weight: 5.00,
      price: 7.29,
      image: "assets/images/24_Mantra_Organic_Sonamasuri_Unpolished_Rice_Brown.jpg"
  },
  {
      productID: 18,
      name: "Tata Sampann, High in Fibre Popular Poha",
      description: "Tata Sampann, High in Fibre Popular Poha(Thick), 500g",
      weight: 0.50,
      price: 0.59,
      image: "assets/images/Tata Sampann-High-in-Fibre-Popular-Poha.jpg"
  },
  {
    productID: 19,
    name: "Tata Sampann Unpolished Toor Dal/Arhar Dal, 1kg",
    description: "Tata Sampann Unpolished Toor Dal/Arhar Dal, 1kg",
    weight: 1.00,
    price: 2.59,
    image: "assets/images/Tata-Sampann-Unpolished-Toor-Dal_Arhar-Dal-1kg.jpg"
},
{
    productID: 20,
    name: "Tata Sampann Unpolished Moong Dal (Split), 1Kg",
    description: "Tata Sampann Unpolished Moong Dal (Split), 1Kg",
    weight: 1.00,
    price: 2.13,
    image: "assets/images/Tata-Sampann-Unpolished-Moong-Dal-(Split)-1Kg.jpg"
},
{
    productID: 21,
    name: "Tata Sampann Unpolished Kala (Black, Brown) Chana, 1kg",
    description: "Tata Sampann Unpolished Kala (Black, Brown) Chana, 1kg",
    weight: 1.00,
    price: 1.92,
    image: "assets/images/Tata-Sampann-Unpolished-Kala-(Black-Brown)-Chana-1kg.jpg"
},
{
    productID: 22,
    name: "Tata Sampann Unpolished Green Moong Dal (Whole), 500g",
    description: "Tata Sampann Unpolished Green Moong Dal (Whole), 500g",
    weight: 0.50,
    price: 1.09,
    image: "assets/images/Tata-Sampann-Unpolished-Green-Moong-Dal-(Whole)-500g.jpg"
},
{
    productID: 23,
    name: "Tata Sampann Unpolished Rajma, 500g",
    description: "Tata Sampann Unpolished Rajma, 500g",
    weight: 0.50,
    price: 1.37,
    image: "assets/images/Tata-Sampann-Unpolished-Rajma-500g.jpg"
},
{
    productID: 24,
    name: "Tata Sampann Urad Whole, 500g",
    description: "Tata Sampann Urad Whole, 500g",
    weight: 0.50,
    price: 1.43,
    image: "assets/images/Tata-Sampann-Urad-Whole-500g.jpg"
},
{
    productID: 25,
    name: "Tata Sampann Chicken Masala with Natural Oils, 100g",
    description: "Tata Sampann Chicken Masala with Natural Oils, 100g, Crafted by Chef Sanjeev Kapoor, With Chef’s Exclusive Tip, Rich Aroma & Flavour",
    weight: 0.10,
    price: 0.94,
    image: "assets/images/Tata-Sampann-Chicken-Masala-with-Natural-Oils-100g.jpg"
},
{
    productID: 26,
    name: "Tata Sampann Meat Masala with Natural Oils, 100g",
    description: "Tata Sampann Meat Masala with Natural Oils, 100g, Meat Masala Powder, Crafted by Chef Sanjeev Kapoor, With Chef’s Exclusive Tip, Rich Aroma & Flavour",
    weight: 0.10,
    price: 0.86,
    image: "assets/images/Tata-Sampann-Meat-Masala-with-Natural-Oils-100g.jpg"
},
{
    productID: 27,
    name: "Eastern Biriyani Masala Powder, 100 g",
    description: "Eastern Biriyani Masala Powder, 100 g",
    weight: 0.10,
    price: 0.73,
    image: "assets/images/Eastern-Biriyani-Masala-Powder-100g.jpg"
},
{
    productID: 28,
    name: "Eastern Meat Masala Powder",
    description: "Eastern Meat Masala Powder | No Added Preservatives | Prepare Delicious Meat Curry At Home | 100G",
    weight: 0.10,
    price: 0.70,
    image: "assets/images/Eastern-Meat-Masala-Powder.jpg"
},
{
    productID: 29,
    name: "Eastern Chicken Masala, 100g",
    description: "Eastern Chicken Masala, 100g",
    weight: 0.10,
    price: 0.70,
    image: "assets/images/Eastern-Chicken-Masala-100g.jpg"
},
{
    productID: 30,
    name: "Ching's Schezwan Masala - Fried Rice, 100g",
    description: "Ching's Schezwan Masala - Fried Rice, 100g",
    weight: 0.10,
    price: 0.74,
    image: "assets/images/Ching's-Schezwan-Masala-Fried-Rice-100g.jpg"
},
{
    productID: 31,
    name: "Tata Sampann Chhole Masala",
    description: "Tata Sampann Chhole Masala with Natural Oils, 100g, Chole Masala Powder, Crafted by Chef Sanjeev Kapoor, With Chef’s Exclusive Tip, Rich Aroma & Flavour",
    weight: 0.10,
    price: 1.03,
    image: "assets/images/Tata-Sampann-Chhole-Masala.jpg"
},
{
    productID: 32,
    name: "Tata Sampann Chaat Masala",
    description: "Tata Sampann Chaat Masala with Natural Oils, 100g, Chat Masala Powder, Crafted by Chef Sanjeev Kapoor, With Chef’s Exclusive Tip, Rich Aroma & Flavour",
    weight: 0.10,
    price: 0.87,
    image: "assets/images/Tata-Sampann-Chaat-Masala.jpg"
},
{
    productID: 33,
    name: "Aachi Powder - Sambar, 100 g Pouch",
    description: "Aachi Powder - Sambar, 100 g Pouch",
    weight: 0.10,
    price: 0.59,
    image: "assets/images/Aachi-Powder-Sambar-100g-Pouch.jpg"
},
{
    productID: 34,
    name: "Brahmins Sambar Powder, 100g (Pack of 1)",
    description: "Brahmins Sambar Powder, 100g (Pack of 1)",
    weight: 0.10,
    price: 0.70,
    image: "assets/images/Brahmins-Sambar-Powder-100g-(Pack-of-1).jpg"
},
{
    productID: 35,
    name: "Aashirvaad Black Pepper 100g",
    description: "Aashirvaad Black Pepper 100g",
    weight: 0.10,
    price: 1.76,
    image: "assets/images/Aashirvaad-Black-Pepper-100g.jpg"
},
{
    productID: 36,
    name: "Pro Nature 100% Organic Black Pepper (Whole), 100 gram",
    description: "Pro Nature 100% Organic Black Pepper (Whole), 100 gram",
    weight: 0.10,
    price: 2.55,
    image: "assets/images/ProNature100%1OrganicBlackPepper(Whole)100gram.jpg"
},
  {
      productID: 37,
      name: "24 Mantra Organic Black Pepper - 100gms",
      description: "24 Mantra Organic Black Pepper - 100gms | Pack of 1 | Chemical Free & Pesticides Free | Unadulterated | Rich Flavour",
      weight: 0.10,
      price: 2.63,
      image: "assets/images/24_Mantra_Organic_Black_Pepper_100gms.jpg"
  },
  {
      productID: 38,
      name: "Tata Sampann Turmeric Powder",
      description: "Tata Sampann Turmeric Powder With Natural Oils, 200g, Haldi Powder",
      weight: 0.20,
      price: 1.14,
      image: "assets/images/Tata-Sampann-Turmeric-Powder.jpg"
  },
  
  {
      productID: 40,
      name: "Aachi Chilli Powder 200 Grams",
      description: "Aachi Chilli Powder 200 Grams",
      weight: 0.20,
      price: 0.55,
      image: "assets/images/Aachi_Chilli_Powder-200Grams.jpg"
  },
  {
      productID: 41,
      name: "Aachi Idly Chilli Powder, 100 Gram",
      description: "Aachi Idly Chilli Powder, 100 Gram",
      weight: 0.10,
      price: 0.47,
      image: "assets/images/Aachi-Idly-Chilli-Powder-100-Gram.jpg"
  },
  {
      productID: 42,
      name: "Asafoetida Powder",
      description: "LG Asafatida Laljee Godhoo Asafoetida Powder, 50 Gram",
      weight: 0.05,
      price: 1.20,
      image: "assets/images/Asafoetida-Powder.jpg"
  },
  {
      productID: 43,
      name: "Aachi Masala - Garam",
      description: "Aachi Masala - Garam, Pouch - Cumin, Fenugreek, Cardamom, Powder, 50 Gm",
      weight: 0.05,
      price: 0.45,
      image: "assets/images/Aachi-Masala-Garam.jpg"
  },
  
  {
      productID: 45,
      name: "Tata Sampann Garam Masala Powder",
      description: "Tata Sampann Garam Masala Powder with Natural Oils, 100g, Crafted by Chef Sanjeev Kapoor, With Chef’s Exclusive Tip, Rich Aroma & Flavour",
      weight: 0.10,
      price: 1.08,
      image: "assets/images/Tata-Sampann-Garam-Masala-Powder.jpg"
  },
  
  {
      productID: 47,
      name: "Aachi Coriander Powder, 100g",
      description: "Aachi Coriander Powder, 100g",
      weight: 0.10,
      price: 0.33,
      image: "assets/images/Aachi-Coriander-Powder-100g.jpg"
  },
  {
      productID: 48,
      name: "Tata Salt 1 Kg",
      description: "Tata Salt 1 Kg, Free Flowing and Iodised Namak, Vacuum Evaporated, Salt in Fresh",
      weight: 1.00,
      price: 0.36,
      image: "assets/images/Tata-Salt-1Kg.jpg"
  },
  {
      productID: 49,
      name: "Aashirvaad Salt, 1kg",
      description: "Aashirvaad Salt,with 4-Step advantage, 1kg",
      weight: 1.00,
      price: 0.29,
      image: "assets/images/Aashirvaad-Salt-1kg.jpg"
  },
  {
      productID: 50,
      name: "Tata Himalayan Rock Pink Salt, 1kg Pouch",
      description: "Tata Himalayan Rock Pink Salt, 1kg Pouch, Premium Sendha Namak, With Natural Trace Minerals, Low Sodium, Crystal Salt",
      weight: 1.00,
      price: 1.29,
      image: "assets/images/Tata-Himalayan-Rock-Pink-Salt-1kg-Pouch.jpg"
  },
  {
      productID: 51,
      name: "Tata Salt Lite, Low Sodium, 1kg",
      description: "Tata Salt Lite, Low Sodium, 1kg",
      weight: 1.00,
      price: 0.65,
      image: "assets/images/Tata-Salt-Lite-Low-Sodium-1kg.jpg"
  },
  {
      productID: 52,
      name: "Tata Crystal salt, 1 kg",
      description: "Tata Crystal salt, 1 kg",
      weight: 1.00,
      price: 0.23,
      image: "assets/images/Tata-Crystal-salt-1 kg.jpg"
  },
  {
      productID: 53,
      name: "Parry's White Label Sugar, 5kg",
      description: "Parry's White Label Sugar, 5kg",
      weight: 5.00,
      price: 3.13,
      image: "assets/images/Parry'sWhiteLabelSugar5kg.jpg"
  },
  {
      productID: 54,
      name: "24 Mantra Organic Unbleached Jaggery Powder 500 gms",
      description: "24 Mantra Organic Unbleached Jaggery Powder 500 gms, Healthy Sugar Substitute, Unrefined & Unadulterated | Certified Organic & Chemical Free",
      weight: 0.50,
      price: 1.17,
      image: "assets/images/24_Mantra_Organic_Unbleached_Jaggery_Powder_500gms.jpg"
  },
      {
        productID: 55,
        name: "Pro Nature 100% Organic Brown Sugar, 1kg",
        description: "Pro Nature 100% Organic Brown Sugar, 1kg",
        weight: 1.00,
        price: 1.70,
        image: "assets/images/ProNature100%OrganicBrownSugar1kg.jpg"
    },
    {
        productID: 56,
        name: "Haldiram's Nagpur Khari Boondhi, 200 grams",
        description: "Haldiram's Nagpur Khari Boondhi, 200 grams",
        weight: 0.20,
        price: 0.68,
        image: "assets/images/Haldiram's-Nagpur-Khari-Boondhi-200-grams.jpg"
    },
    {
        productID: 57,
        name: "Haldiram's Nagpur Bhujia Sev, Spicy, 400 Gram",
        description: "Haldiram's Nagpur Bhujia Sev, Spicy, 400 Gram",
        weight: 0.40,
        price: 1.37,
        image: "assets/images/Haldiram's-Nagpur-Bhujia-Sev-Spicy-400-Gram.jpg"
    },
    {
        productID: 58,
        name: "Haldiram's Nagpur Mini Samosa, 200g",
        description: "Haldiram's Nagpur Mini Samosa, 200g",
        weight: 0.20,
        price: 0.85,
        image: "assets/images/Haldiram's-Nagpur-Mini-Samosa-200g.jpg"
    },
    {
        productID: 59,
        name: "Tata Tea Kanan Devan Tea, 500 g",
        description: "Tata Tea Kanan Devan Tea, 500 g",
        weight: 0.50,
        price: 1.94,
        image: "assets/images/Tata-Tea-Kanan-Devan-Tea-500 g.jpg"
    },
    {
        productID: 60,
        name: "Red Label Natural Care Tea Chai , 1 kg",
        description: "Red Label Natural Care Tea Chai Made With 5 Ayurvedic Herbs, 1 kg",
        weight: 1.00,
        price: 6.70,
        image: "assets/images/Red-Label-Natural-Care-Tea-Chai-1kg.jpg"
    },
    {
        productID: 61,
        name: "Parle G Gold Milk, 1000 Gram",
        description: "Parle G Gold Milk, 1000 Gram",
        weight: 1.00,
        price: 1.80,
        image: "assets/images/ParleGGoldMilk1000Gram.jpg"
    },
    {
        productID: 62,
        name: "Quaker Oats 2kg",
        description: "Quaker Oats 2kg | Rolled Oats | 100% Natural Wholegrain | Nutritious Breakfast Cereals | Porridge | Easy to Cook",
        weight: 2.00,
        price: 3.90,
        image: "assets/images/Quaker-Oats-2kg.jpg"
    },
    {
        productID: 63,
        name: "Aashirvaad Methi 100g",
        description: "Aashirvaad Methi 100g",
        weight: 0.10,
        price: 0.36,
        image: "assets/images/Aashirvaad-Methi-100g.jpg"
    }
];

// Initialize an empty cart array
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
} catch (error) {
    console.error('Error loading cart from localStorage:', error);
    cart = [];
}

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

// Call the function when the page loads
window.onload = () => {
    displayProducts();
    updateCartUI(); // Update the cart UI on page load
};

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

// Event listener for "Add to Cart" buttons and quantity updates
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