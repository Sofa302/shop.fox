const catalog2 = [
    {
        id: 1,
        name: "Apple iPhone 15 128GB",
        category: "Смартфони",
        price: 33999,
        oldPrice: 35999,
        discount: 6,
        rating: 5,
        img: "https://ifranko.ua/wp-content/uploads/2023/09/img_6189.jpg"
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

function formatPrice2(price) {
    return Number(price).toLocaleString("uk-UA");
}


/* =========================================================
   КОШИК (спільний з каталогом — див. cart-store.js)
========================================================= */

const cartBtn = document.getElementById("cartBtn");
const cartModal2 = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");

const cartCount2 = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal2 = document.getElementById("cartTotal");


function openCart() {

    if (!cartModal2) return;

    cartModal2.classList.add("active");
}


function closeCartWindow() {

    if (!cartModal2) return;

    cartModal2.classList.remove("active");
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


if (cartModal2) {

    cartModal2.addEventListener("click", event => {

        if (event.target === cartModal2) {
            closeCartWindow();
        }

    });

}


// "Знімок" товару, який зберігається в кошику
function cartSnapshot(product) {

    return {
        name: product.name,
        price: product.price,
        oldPrice: product.oldPrice || null,
        img: product.img,
        category: product.category || ""
    };
}


// Перенесення старого кошика (cart2) у спільне сховище
(function migrateOldCart() {

    try {

        const old = JSON.parse(
            localStorage.getItem("cart2")
        );

        if (Array.isArray(old)) {

            old.forEach(item => {

                if (item && item.name) {
                    CartStore.add(cartSnapshot(item), item.quantity || 1);
                }

            });

        }

        localStorage.removeItem("cart2");

    } catch (e) { /* ігноруємо */ }

})();


/* Додавання товару (productId — id у catalog2) */

function addToCart(productId) {

    const product = catalog2.find(
        item => item.id === productId
    );

    if (!product) return;

    CartStore.add(cartSnapshot(product));

    updateCart();

    openCart();
}


/* Видалення позиції (index — номер у кошику) */

function removeFromCart(index) {

    CartStore.remove(index);

    updateCart();
}


/* Зміна кількості */

function changeQuantity(index, change) {

    CartStore.changeQty(index, change);

    updateCart();
}


/* Оновлення кошика */

function updateCart() {

    if (!cartCount2) return;


    const items = CartStore.list();


    cartCount2.textContent = CartStore.totalQty();


    if (!cartItems) return;


    if (items.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Кошик поки що порожній
            </p>
        `;

        if (cartTotal2) {
            cartTotal2.textContent = "0 грн";
        }

        return;
    }


    cartItems.innerHTML = items.map((item, index) => `

        <div class="cart-item">

            <img src="${item.img}" alt="">

            <div class="cart-item-info">

                <strong>
                    ${item.name}
                </strong>

                <span>
                    ${item.qty} ×
                    ${formatPrice2(item.price)} грн
                </span>

            </div>

            <div style="
                display:flex;
                align-items:center;
                gap:8px;
            ">

                <button
                    class="remove-item"
                    onclick="changeQuantity(${index}, -1)"
                >
                    −
                </button>

                <strong>
                    ${item.qty}
                </strong>

                <button
                    class="remove-item"
                    onclick="changeQuantity(${index}, 1)"
                >
                    +
                </button>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    Видалити
                </button>

            </div>

        </div>

    `).join("");


    if (cartTotal2) {

        cartTotal2.textContent =
            `${formatPrice2(CartStore.totalPrice())} грн`;

    }
}


// Кошик змінили на іншій вкладці
document.addEventListener("cart:changed", updateCart);


/* =========================================================
   ОБРАНЕ (спільне з каталогом — див. favorites-store.js)
========================================================= */

const favoritesBtn =
    document.getElementById("favoritesBtn");

const favoriteCount =
    document.getElementById("favoriteCount");

const favoritesModal = document.getElementById("favoritesModal");
const favoritesList  = document.getElementById("favoritesList");


// "Знімок" товару, який зберігається в спільному обраному
function favSnapshot(product) {

    return {
        name: product.name,
        price: product.price,
        oldPrice: product.oldPrice || null,
        img: product.img,
        category: product.category || ""
    };
}


// Перенесення старого списку (id товарів) у спільне сховище
(function migrateOldFavorites() {

    try {

        const old = JSON.parse(
            localStorage.getItem("favorites")
        );

        if (Array.isArray(old)) {

            old.forEach(id => {

                const product =
                    catalog2.find(item => item.id === id);

                if (product) {
                    FavStore.add(favSnapshot(product));
                }

            });

        }

        localStorage.removeItem("favorites");

    } catch (e) { /* ігноруємо */ }

})();


function updateFavoriteCount() {

    if (!favoriteCount) return;

    const count = FavStore.count();

    favoriteCount.textContent = count;

    favoriteCount.style.display =
        count > 0
            ? "flex"
            : "none";
}


function toggleFavorite(productId) {

    const product =
        catalog2.find(item => item.id === productId);

    if (!product) return;

    FavStore.toggle(favSnapshot(product));

    updateFavoriteCount();

    renderProducts(
        getCurrentProducts()
    );

    renderFavoritesList();
}


function updateFavoriteButtons() {

    document
        .querySelectorAll(".product-favorite")
        .forEach(button => {

            const product =
                catalog2.find(
                    item => item.id === Number(button.dataset.id)
                );

            const isFav =
                !!product && FavStore.has(product.name);

            button.textContent = isFav ? "♥" : "♡";

            button.classList.toggle("active", isFav);

        });
}


function renderFavoritesList() {

    if (!favoritesList) return;

    const items = FavStore.list();

    if (!items.length) {

        favoritesList.innerHTML =
            '<p class="empty-favorites">У вас поки немає обраних товарів</p>';

        return;
    }

    favoritesList.innerHTML = items.map((fav, index) => {

        return `

        <div class="cart-item">

            <img src="${fav.img}" alt="">

            <div class="cart-item-info">
                <strong>${fav.name}</strong>
                <span>${formatPrice2(fav.price)} грн</span>
            </div>

            <div class="cart-item-side">

                <button class="remove-item" style="color:#f60"
                        data-fav-action="cart" data-index="${index}">
                    В кошик
                </button>

                <button class="remove-item"
                        data-fav-action="remove" data-index="${index}">
                    Видалити
                </button>

            </div>

        </div>`;

    }).join("");
}


function openFavorites() {

    if (!favoritesModal) return;

    renderFavoritesList();

    favoritesModal.classList.add("active");
}


function closeFavorites() {

    if (!favoritesModal) return;

    favoritesModal.classList.remove("active");
}


if (favoritesBtn) {
    favoritesBtn.addEventListener("click", openFavorites);
}


const closeFavoritesBtn = document.getElementById("closeFavorites");

if (closeFavoritesBtn) {
    closeFavoritesBtn.addEventListener("click", closeFavorites);
}


if (favoritesModal) {

    favoritesModal.addEventListener("click", event => {

        if (event.target === favoritesModal) {
            closeFavorites();
        }

    });

}


if (favoritesList) {

    favoritesList.addEventListener("click", event => {

        const button = event.target.closest("[data-fav-action]");

        if (!button) return;

        if (button.dataset.favAction === "remove") {

            const fav = FavStore.list()[Number(button.dataset.index)];

            if (fav) {

                FavStore.remove(fav.name);

                updateFavoriteCount();

                renderProducts(getCurrentProducts());

                renderFavoritesList();
            }
        }

        if (button.dataset.favAction === "cart") {
            // addToCart відкриває кошик, тому спершу закриваємо "Обране"
            const fav = FavStore.list()[Number(button.dataset.index)];

            if (fav) {
                closeFavorites();
                CartStore.add(fav);
                updateCart();
                openCart();
            }
        }

    });

}


// Обране змінили на іншій вкладці
document.addEventListener("favorites:changed", () => {

    updateFavoriteCount();

    renderProducts(getCurrentProducts());

    renderFavoritesList();

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeFavorites();
        closeCartWindow();
    }

});


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
                        ${formatPrice2(product.oldPrice)} грн
                    </div>
                  `
                : "";


        const favoriteActive =
            FavStore.has(product.name)
                ? "active"
                : "";


        const favoriteIcon =
            FavStore.has(product.name)
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
                        ${formatPrice2(product.price)} грн
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

    let result = [...catalog2];


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
