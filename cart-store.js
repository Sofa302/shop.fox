/* =========================================================
   СПІЛЬНИЙ КОШИК (головна + каталог)
   Зберігається в localStorage під одним ключем. Товар
   ідентифікується за назвою, а в кошику лежить його "знімок"
   (назва, ціна, фото...) і кількість, тому кошик однаковий
   на обох сторінках.
========================================================= */

const CartStore = (function () {

    const KEY = "cart_shared";

    // [{ name, price, oldPrice, img, category, qty }]
    let items = [];

    function read() {
        try {
            const data = JSON.parse(localStorage.getItem(KEY));

            items = Array.isArray(data)
                ? data.filter(i => i && i.name && i.qty > 0)
                : [];
        } catch (e) {
            items = [];
        }
    }

    function write() {
        try {
            localStorage.setItem(KEY, JSON.stringify(items));
        } catch (e) { /* ігноруємо */ }
    }

    // Додати товар (за назвою); qty — скільки штук додати
    function add(product, qty = 1) {
        const found = items.find(i => i.name === product.name);

        if (found) {
            found.qty += qty;
        } else {
            items.push({
                name: product.name,
                price: product.price,
                oldPrice: product.oldPrice || null,
                img: product.img,
                category: product.category || "",
                qty: qty
            });
        }

        write();
    }

    // Змінити кількість позиції з номером index
    function changeQty(index, delta) {
        const item = items[index];
        if (!item) return;

        item.qty += delta;

        if (item.qty <= 0) {
            items.splice(index, 1);
        }

        write();
    }

    function remove(index) {
        if (items[index]) {
            items.splice(index, 1);
            write();
        }
    }

    read();

    // Кошик змінили в іншій вкладці — підхоплюємо зміни
    window.addEventListener("storage", function (e) {
        if (e.key === KEY) {
            read();
            document.dispatchEvent(new Event("cart:changed"));
        }
    });

    return {
        add,
        changeQty,
        remove,
        list:       () => items.slice(),
        totalQty:   () => items.reduce((sum, i) => sum + i.qty, 0),
        totalPrice: () => items.reduce((sum, i) => sum + i.price * i.qty, 0)
    };

})();
