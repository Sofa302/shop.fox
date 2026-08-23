const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

let cart = [];


// ==========================
// КОШИК
// ==========================

function openCart() {
    cartModal.classList.add("active");
}

function closeCartWindow() {
    cartModal.classList.remove("active");
}

cartBtn.addEventListener("click", openCart);

closeCart.addEventListener("click", closeCartWindow);

cartModal.addEventListener("click", (event) => {
    if (event.target === cartModal) {
        closeCartWindow();
    }
});


// ==========================
// ДОДАВАННЯ ТОВАРУ
// ==========================

document.querySelectorAll(".buy-btn").forEach(button => {

    button.addEventListener("click", () => {

        const productName = button.dataset.product;

        cart.push({
            name: productName,
            price: getProductPrice(productName)
        });

        updateCart();

        openCart();
    });

});


function getProductPrice(productName) {

    const prices = {
        "Apple iPhone 15": 33999,
        "Samsung Galaxy S25": 31499,
        "MacBook Air M3": 46499,
        "PlayStation 5": 23999
    };

    return prices[productName] || 0;
}


// ==========================
// ОНОВЛЕННЯ КОШИКА
// ==========================

function updateCart() {

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Кошик поки що порожній
            </p>
        `;

        cartTotal.textContent = "0 грн";

        return;
    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;

        const element = document.createElement("div");

        element.className = "cart-item";

        element.innerHTML = `
            <div>
                <div class="cart-item-name">
                    ${item.name}
                </div>

                <div>
                    ${formatPrice(item.price)} грн
                </div>
            </div>

            <button
                class="remove-item"
                data-index="${index}"
            >
                Видалити
            </button>
        `;

        cartItems.appendChild(element);

    });


    cartTotal.textContent = `${formatPrice(total)} грн`;


    document.querySelectorAll(".remove-item").forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            cart.splice(index, 1);

            updateCart();

        });

    });

}


function formatPrice(price) {
    return price.toLocaleString("uk-UA");
}


// ==========================
// ОБРАНЕ
// ==========================

const favoritesBtn = document.getElementById("favoritesBtn");
const favoriteCount = document.getElementById("favoriteCount");

let favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
);


// Оновлення лічильника
function updateFavoriteCount() {

    favoriteCount.textContent = favorites.length;

    favoriteCount.style.display =
        favorites.length > 0 ? "flex" : "none";
}


// Оновлення сердечок
function updateFavoriteButtons() {

    document.querySelectorAll(".favorite").forEach(button => {

        const product = button.closest(".product");

        if (!product) return;

        const productName = product.dataset.name;

        if (favorites.includes(productName)) {

            button.textContent = "♥";
            button.style.color = "#ff5b00";

        } else {

            button.textContent = "♡";
            button.style.color = "#171717";

        }

    });
}


// Додавання / видалення
document.querySelectorAll(".favorite").forEach(button => {

    button.addEventListener("click", () => {

        const product = button.closest(".product");

        const productName = product.dataset.name;

        const index = favorites.indexOf(productName);


        if (index === -1) {

            // ДОДАТИ
            favorites.push(productName);

        } else {

            // ВИДАЛИТИ
            favorites.splice(index, 1);

        }


        // ЗБЕРЕГТИ В БРАУЗЕРІ
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );


        updateFavoriteCount();
        updateFavoriteButtons();

    });

});


// Початковий стан
updateFavoriteCount();
updateFavoriteButtons();


// ==========================
// КНОПКА "ОБРАНЕ"
// ==========================

favoritesBtn.addEventListener("click", () => {

    if (favorites.length === 0) {

        alert("Обране поки що порожнє ❤️");

        return;
    }


    let text = "❤️ ОБРАНІ ТОВАРИ\n\n";

    favorites.forEach((product, index) => {

        text += `${index + 1}. ${product}\n`;

    });


    alert(text);

});

// ==========================
// ПОШУК
// ==========================

function searchProducts() {

    const query = searchInput.value
        .trim()
        .toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        const name = product.dataset.name.toLowerCase();

        if (name.includes(query)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

}


searchBtn.addEventListener("click", searchProducts);

searchInput.addEventListener("input", searchProducts);

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchProducts();
    }

});


// ==========================
// КНОПКА КАТАЛОГУ
// ==========================

const catalogBtn = document.getElementById("catalogBtn");

catalogBtn.addEventListener("click", () => {

    alert(
        "Каталог:\n\n" +
        "📱 Смартфони\n" +
        "💻 Ноутбуки\n" +
        "📺 Телевізори\n" +
        "🧊 Побутова техніка\n" +
        "🎧 Аудіо\n" +
        "🎮 Ігрова техніка"
    );

});
// ==========================
// ФІЛЬТРИ
// ==========================

const categoryFilter =
    document.getElementById("categoryFilter");

const priceFilter =
    document.getElementById("priceFilter");

const discountFilter =
    document.getElementById("discountFilter");

const sortFilter =
    document.getElementById("sortFilter");

const resetFilters =
    document.getElementById("resetFilters");

const productsContainer =
    document.getElementById("products");


function filterProducts() {

    const category = categoryFilter.value;
    const price = priceFilter.value;
    const onlyDiscount = discountFilter.checked;
    const sort = sortFilter.value;

    const products = [
        ...document.querySelectorAll(".product")
    ];


    products.forEach(product => {

        const productCategory =
            product.dataset.category;

        const productPrice =
            Number(product.dataset.price);

        const productDiscount =
            Number(product.dataset.discount);


        // Категорія
        let categoryOK =
            category === "all" ||
            productCategory === category;


        // Ціна
        let priceOK = true;

        if (price !== "all") {

            const [min, max] =
                price.split("-").map(Number);

            priceOK =
                productPrice >= min &&
                productPrice <= max;
        }


        // Знижка
        let discountOK =
            !onlyDiscount ||
            productDiscount > 0;


        // Показуємо / ховаємо
        if (
            categoryOK &&
            priceOK &&
            discountOK
        ) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });


    // Сортування
    if (sort === "cheap") {

        products.sort(
            (a, b) =>
                Number(a.dataset.price) -
                Number(b.dataset.price)
        );

    }


    if (sort === "expensive") {

        products.sort(
            (a, b) =>
                Number(b.dataset.price) -
                Number(a.dataset.price)
        );

    }


    if (sort === "discount") {

        products.sort(
            (a, b) =>
                Number(b.dataset.discount) -
                Number(a.dataset.discount)
        );

    }


    products.forEach(product => {

        productsContainer.appendChild(product);

    });

}


// Події фільтрів

categoryFilter.addEventListener(
    "change",
    filterProducts
);

priceFilter.addEventListener(
    "change",
    filterProducts
);

discountFilter.addEventListener(
    "change",
    filterProducts
);

sortFilter.addEventListener(
    "change",
    filterProducts
);


// Скинути фільтри

resetFilters.addEventListener("click", () => {

    categoryFilter.value = "all";

    priceFilter.value = "all";

    discountFilter.checked = false;

    sortFilter.value = "default";

    searchInput.value = "";

    filterProducts();

    // Показуємо всі товари
    document.querySelectorAll(".product").forEach(product => {
        product.style.display = "";
    });
catalog.forEach(product => {

    console.log(product.category);
    console.log(product.name);
    console.log(product.price);
    console.log(product.photo);
const catalogBtn = document.getElementById("catalogBtn");

catalogBtn.addEventListener("click", () => {
    window.location.href = "catalog.html";
});
});
});