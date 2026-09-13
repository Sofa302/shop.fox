const catalog = [
    {
        id: 1,
        name: "Apple iPhone 15 128GB",
        category: "Смартфони",
        price: 33999,
        oldPrice: 35999,
        discount: 6,
        rating: 5,
        img: "https://cdn.comfy.ua/media/catalog/product/cache/5/image/600x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_15_pro_black_titanium_pdp_image_position-1__ww-en.jpg"
    },

    {
        id: 2,
        name: "Samsung Galaxy S25 256GB",
        category: "Смартфони",
        price: 31499,
        oldPrice: 33999,
        discount: 7,
        rating: 5,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4ZSGz1p631OUGOAXaaXc22Rzi35R10DJZPrXbsbZ3-4yjr1rICP0V38k4Ia4xFmKwG45iTfUWWfkwiBmd7FaKDYYZXxCga_ZOddaFu8RplM8LUa6Degerd7p-oSNC&usqp=CAc"
    },

    {
        id: 3,
        name: "Xiaomi Redmi Note 13 Pro",
        category: "Смартфони",
        price: 11999,
        oldPrice: 13999,
        discount: 14,
        rating: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRNGOPz1nfkiJXmztB4JJPb_x8jYoRWq3XcmhnK29_Q&s=10"
    },

    {
        id: 4,
        name: "Apple MacBook Air M3",
        category: "Ноутбуки",
        price: 46499,
        oldPrice: 49999,
        discount: 7,
        rating: 5,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyMKhQ9ymitjsvRYLJCid749PjStR5A2Xkhif3f_r67qoloWNOMebAfwqmZUHnM9UDjoyegHcV5PDPKkNeU8mCXOWArmALkhrUpDsJK54&usqp=CAc"
    },

    {
        id: 5,
        name: "ASUS Vivobook 15",
        category: "Ноутбуки",
        price: 27999,
        oldPrice: null,
        discount: 0,
        rating: 4,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRBrySB4Fjez58P47dDEDrldBmlUNNdx6i77LKcKqcc5FYT9pTd9uUZpqg4LgpX1YbzwbLnmzO3BX69VybEHvzGJtsE32zIDxzVsUlE3JAjWpbWxRiXaF8kLQ2NLDKsu37svNpn73dBhg&usqp=CAc"
    },

    {
        id: 6,
        name: "Lenovo IdeaPad Slim 3",
        category: "Ноутбуки",
        price: 21999,
        oldPrice: 23999,
        discount: 8,
        rating: 4,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTH4mUrUBxT8XYFRnRyncTWT74iGnNcl4yq6y8CMLCVwQMifehc9N6udjtI8znwCaXyzeme1fii-psCdOHcTaV5oNfBh_xeVonX4wqejVcO7PlJPA5IKyrYeZkp1Q5SoGy7D42uh4_LGOM&usqp=CAc"
    },

    {
        id: 7,
        name: "PlayStation 5 Slim",
        category: "Ігрова техніка",
        price: 23999,
        oldPrice: 25999,
        discount: 8,
        rating: 5,
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfEnOLfIMvIWvnQoktxNO8WcLSIHagvuFZTobqUIIuQPiwVJ8R16vUG9qeZZor6oDhjl9FvoaGtnPoMNBOSMhISTk7Wn1jX4tpZ8ZrysTldRgLISf5b_B87fqMC9yHljBWoxmVTQ&usqp=CAc"
    },

    {
        id: 8,
        name: "Sony PlayStation Portal",
        category: "Ігрова техніка",
        price: 10999,
        oldPrice: null,
        discount: 0,
        rating: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUjuwi7tW4qv4WYZY1e-SoxH7IqSaUjnoN-vWPbq51g&s=10"
    },

    {
        id: 9,
        name: "Samsung Smart TV 55\" 4K",
        category: "Телевізори",
        price: 25999,
        oldPrice: 29999,
        discount: 13,
        rating: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROhk_GM7A2qJLIx8IelCbsIdTVcuhCnlzw_edxYlB-GQ&s=10"
    }
];



/* =========================================================
   ДОПОМІЖНІ ФУНКЦІЇ
========================================================= */

function formatPrice(price) {
    return Number(price).toLocaleString("uk-UA");
}


/* =========================================================
   КОШИК
========================================================= */

let cart = JSON.parse(
    localStorage.getItem("cart") || "[]"
);

const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");


function saveCart() {
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


function openCart() {

    if (!cartModal) return;

    cartModal.classList.add("active");
}


function closeCartWindow() {

    if (!cartModal) return;

    cartModal.classList.remove("active");
}


if (cartBtn) {
    cartBtn.addEventListener("click", openCart);
}


if (closeCart) {
    closeCart.addEventListener(
        "click",
        closeCartWindow
    );
}


if (cartModal) {

    cartModal.addEventListener("click", event => {

        if (event.target === cartModal) {
            closeCartWindow();
        }

    });

}


/* Додавання товару */

function addToCart(productId) {

    const product = catalog.find(
        item => item.id === productId
    );

    if (!product) return;


    const existingProduct = cart.find(
        item => item.id === productId
    );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    saveCart();

    updateCart();

    openCart();
}


/* Видалення товару */

function removeFromCart(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    saveCart();

    updateCart();
}


/* Зміна кількості */

function changeQuantity(productId, change) {

    const product = cart.find(
        item => item.id === productId
    );

    if (!product) return;


    product.quantity += change;


    if (product.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== productId
        );

    }


    saveCart();

    updateCart();
}


/* Оновлення кошика */

function updateCart() {

    if (!cartCount) return;


    const totalItems = cart.reduce(
        (sum, item) =>
            sum + item.quantity,
        0
    );


    cartCount.textContent = totalItems;


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Кошик поки що порожній
            </p>
        `;

        if (cartTotal) {
            cartTotal.textContent = "0 грн";
        }

        return;
    }


    cartItems.innerHTML = "";


    let total = 0;


    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;


        const element =
            document.createElement("div");


        element.className =
            "cart-item";


        element.innerHTML = `

            <div class="cart-item-info">

                <strong>
                    ${item.photo} ${item.name}
                </strong>

                <span>
                    ${item.quantity} ×
                    ${formatPrice(item.price)} грн
                </span>

            </div>

            <div style="
                display:flex;
                align-items:center;
                gap:8px;
            ">

                <button
                    class="remove-item"
                    onclick="changeQuantity(${item.id}, -1)"
                >
                    −
                </button>

                <strong>
                    ${item.quantity}
                </strong>

                <button
                    class="remove-item"
                    onclick="changeQuantity(${item.id}, 1)"
                >
                    +
                </button>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${item.id})"
                >
                    Видалити
                </button>

            </div>
        `;


        cartItems.appendChild(element);

    });


    if (cartTotal) {

        cartTotal.textContent =
            `${formatPrice(total)} грн`;

    }
}


/* =========================================================
   ОБРАНЕ
========================================================= */

let favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
);


const favoritesBtn =
    document.getElementById("favoritesBtn");

const favoriteCount =
    document.getElementById("favoriteCount");


function saveFavorites() {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );
}


function updateFavoriteCount() {

    if (!favoriteCount) return;


    favoriteCount.textContent =
        favorites.length;


    favoriteCount.style.display =
        favorites.length > 0
            ? "flex"
            : "none";
}


function toggleFavorite(productId) {

    const index =
        favorites.indexOf(productId);


    if (index === -1) {

        favorites.push(productId);

    } else {

        favorites.splice(index, 1);

    }


    saveFavorites();

    updateFavoriteCount();

    renderProducts(
        getCurrentProducts()
    );
}


function updateFavoriteButtons() {

    document
        .querySelectorAll(".product-favorite")
        .forEach(button => {

            const productId =
                Number(button.dataset.id);


            if (
                favorites.includes(productId)
            ) {

                button.textContent = "♥";

                button.classList.add(
                    "active"
                );

            } else {

                button.textContent = "♡";

                button.classList.remove(
                    "active"
                );

            }

        });
}


if (favoritesBtn) {

    favoritesBtn.addEventListener(
        "click",
        () => {

            if (favorites.length === 0) {

                alert(
                    "Обране поки що порожнє ❤️"
                );

                return;
            }


            const favoriteProducts =
                catalog.filter(product =>
                    favorites.includes(
                        product.id
                    )
                );


            let text =
                "❤️ ОБРАНІ ТОВАРИ\n\n";


            favoriteProducts.forEach(
                (product, index) => {

                    text +=
                        `${index + 1}. ` +
                        `${product.name} — ` +
                        `${formatPrice(product.price)} грн\n`;

                }
            );


            alert(text);

        }
    );

}


/* =========================================================
   ВИВЕДЕННЯ ТОВАРІВ
========================================================= */

function renderProducts(products) {

    const container =
        document.getElementById(
            "catalogProducts"
        );


    if (!container) return;


    container.innerHTML = "";


    const noProducts =
        document.getElementById(
            "noProducts"
        );


    if (products.length === 0) {

        if (noProducts) {
            noProducts.style.display =
                "block";
        }

        updateProductsCounter(0);

        return;
    }


    if (noProducts) {
        noProducts.style.display =
            "none";
    }


    products.forEach(product => {

        const card =
            document.createElement("article");


        card.className =
            "product-card";


        card.dataset.id =
            product.id;


        const discountHTML =
            product.discount > 0
                ? `
                    <div class="discount">
                        -${product.discount}%
                    </div>
                  `
                : "";


        const oldPriceHTML =
            product.oldPrice
                ? `
                    <div class="old-price">
                        ${formatPrice(product.oldPrice)} грн
                    </div>
                  `
                : "";


        const favoriteActive =
            favorites.includes(product.id)
                ? "active"
                : "";


        const favoriteIcon =
            favorites.includes(product.id)
                ? "♥"
                : "♡";


        card.innerHTML = `

            ${discountHTML}

            <button
                class="product-favorite ${favoriteActive}"
                data-id="${product.id}"
                onclick="toggleFavorite(${product.id})"
                aria-label="Додати в обране"
            >
                ${favoriteIcon}
            </button>


            <div class="product-image">

                <span class="img_container" style="
                    font-size: 95px;
                    line-height: 1;

                ">
                    <img src="${product.img}">
                </span>

            </div>


            <div class="product-category">
                ${product.category}
            </div>


            <div class="rating">

                ${"★".repeat(product.rating)}

                <span>
                    (${product.rating}.0)
                </span>

            </div>


            <h3>
                ${product.name}
            </h3>


            <div class="product-bottom">

                <div>

                    ${oldPriceHTML}

                    <strong>
                        ${formatPrice(product.price)} грн
                    </strong>

                </div>


                <button
                    class="buy-btn"
                    onclick="addToCart(${product.id})"
                    title="Додати в кошик"
                >
                    🛒
                </button>

            </div>

        `;


        container.appendChild(card);

    });


    updateProductsCounter(
        products.length
    );

    updateFavoriteButtons();
}


/* =========================================================
   ЛІЧИЛЬНИК ТОВАРІВ
========================================================= */

function updateProductsCounter(count) {

    const productsCount =
        document.getElementById(
            "productsCount"
        );


    const resultText =
        document.getElementById(
            "resultText"
        );


    if (productsCount) {

        productsCount.textContent =
            `${count} товарів`;

    }


    if (resultText) {

        resultText.textContent =
            `Знайдено товарів: ${count}`;

    }
}


/* =========================================================
   ПОШУК
========================================================= */

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchBtn =
    document.getElementById(
        "searchBtn"
    );


function getCurrentProducts() {

    let result = [...catalog];


    /* ПОШУК */

    if (searchInput) {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        if (query) {

            result =
                result.filter(product => {

                    return (

                        product.name
                            .toLowerCase()
                            .includes(query)

                        ||

                        product.category
                            .toLowerCase()
                            .includes(query)

                    );

                });

        }

    }


    /* СОРТУВАННЯ */

    const sortFilter =
        document.getElementById(
            "sortFilter"
        );


    if (sortFilter) {

        switch (sortFilter.value) {

            case "cheap":

                result.sort(
                    (a, b) =>
                        a.price - b.price
                );

                break;


            case "expensive":

                result.sort(
                    (a, b) =>
                        b.price - a.price
                );

                break;


            case "name":

                result.sort(
                    (a, b) =>
                        a.name.localeCompare(
                            b.name,
                            "uk"
                        )
                );

                break;

        }

    }


    return result;
}


function searchProducts() {

    renderProducts(
        getCurrentProducts()
    );
}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        searchProducts
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchProducts
    );


    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                searchProducts();
            }

        }
    );

}


/* =========================================================
   СОРТУВАННЯ
========================================================= */

const sortFilter =
    document.getElementById(
        "sortFilter"
    );


if (sortFilter) {

    sortFilter.addEventListener(
        "change",
        () => {

            renderProducts(
                getCurrentProducts()
            );

        }
    );

}


/* =========================================================
   КНОПКА "КАТАЛОГ"
========================================================= */

const catalogBtn =
    document.getElementById(
        "catalogBtn"
    );


if (catalogBtn) {

    catalogBtn.addEventListener(
        "click",
        () => {

            window.location.href =
                "catalog.html";

        }
    );

}


/* =========================================================
   HERO — "ДИВИТИСЯ ТОВАРИ"
========================================================= */

document
    .querySelectorAll(".hero .primary-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const catalogSection =
                    document.querySelector(
                        ".catalog-page"
                    );


                if (catalogSection) {

                    catalogSection.scrollIntoView({
                        behavior: "smooth"
                    });

                } else {

                    window.location.href =
                        "catalog.html";

                }

            }
        );

    });


/* =========================================================
   ПОЧАТКОВИЙ ЗАПУСК
========================================================= */

updateCart();

updateFavoriteCount();

renderProducts(
    getCurrentProducts()
);
