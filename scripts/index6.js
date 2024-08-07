let products = [];
let editingProductIndex = null;

function displayProducts() {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '';

    products.forEach((product, index) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>Description: ${product.description}</p>
                <p>Rating: ${product.rating}/5</p>
            </div>
            <div class="product-actions">
                <button onclick="viewProduct(${index})">View</button>
                <button onclick="editProduct(${index})">Edit</button>
                <button class="delete" onclick="deleteProduct(${index})">Delete</button>
            </div>
        `;

        productsList.appendChild(productDiv);
    });
}

function addOrUpdateProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const description = document.getElementById('productDescription').value;
    const rating = document.getElementById('productRating').value;
    const image = document.getElementById('productImage').value;

    if (!name || !price || !description || !rating || !image) {
        alert('Please fill all fields');
        return;
    }
    if (rating>5){
        alert('Please choose from 1-5');
        return;
    }

    const product = { name, price, description, rating, image };

    if (editingProductIndex !== null) {
        products[editingProductIndex] = product;
        editingProductIndex = null;
    } else {
        products.push(product);
    }

    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productDescription').value = '';
    document.getElementById('productRating').value = '';
    document.getElementById('productImage').value = '';

    displayProducts();
}

function viewProduct(index) {
    const product = products[index];
    alert(`Product Details:\n\nName: ${product.name}\nPrice: $${product.price}\nDescription: ${product.description}\nRating: ${product.rating}/5`);
}

function editProduct(index) {
    const product = products[index];
    document.getElementById('productName').value = product.name;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productRating').value = product.rating;
    document.getElementById('productImage').value = product.image;
    
    editingProductIndex = index;
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}

displayProducts();


