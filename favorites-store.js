/* =========================================================
   СПІЛЬНЕ ОБРАНЕ (головна + каталог)
   Зберігається в localStorage під одним ключем, тому обидві
   сторінки бачать той самий список. Товар ідентифікується
   за назвою, а в списку лежить його "знімок" (назва, ціна,
   фото...), щоб обране можна було показати на будь-якій сторінці.
========================================================= */

const FavStore = (function () {

    const KEY = "favorites_shared";

    let items = [];

    function read() {
        try {
            const data = JSON.parse(localStorage.getItem(KEY));
            items = Array.isArray(data) ? data.filter(i => i && i.name) : [];
        } catch (e) {
            items = [];
        }
    }

    function write() {
        try {
            localStorage.setItem(KEY, JSON.stringify(items));
        } catch (e) { /* ігноруємо */ }
    }

    function has(name) {
        return items.some(i => i.name === name);
    }

    function add(snapshot) {
        if (!has(snapshot.name)) {
            items.push(snapshot);
            write();
        }
    }

    function remove(name) {
        items = items.filter(i => i.name !== name);
        write();
    }

    // true — товар тепер в обраному, false — прибраний
    function toggle(snapshot) {
        if (has(snapshot.name)) {
            remove(snapshot.name);
            return false;
        }

        add(snapshot);
        return true;
    }

    read();

    // Якщо обране змінили в іншій вкладці — підхоплюємо зміни
    window.addEventListener("storage", function (e) {
        if (e.key === KEY) {
            read();
            document.dispatchEvent(new Event("favorites:changed"));
        }
    });

    return {
        has,
        add,
        remove,
        toggle,
        list:  () => items.slice(),
        count: () => items.length
    };

})();
