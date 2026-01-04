// Оновлення лічильника кошика в хедері
function updateCartIcon() {
    const countSpan = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    if (countSpan) {
        countSpan.innerText = cart.length;
    }
}

// Додавання товару
function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    cart.push({ name: name, price: price, img: img });
    localStorage.setItem('eloriaCart', JSON.stringify(cart));
    updateCartIcon();
    alert(`Товар "${name}" додано до кошика!`);
}

// Виведення товарів на сторінці оплати (pay.html)
function renderCart() {
    const container = document.getElementById('cart-items-display');
    const totalDisplay = document.getElementById('total-price-display');
    
    if (!container) return; // Якщо ми не на сторінці pay.html

    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    
    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding: 20px;'>Ваш кошик порожній</p>";
        totalDisplay.innerText = "Разом: 0 ₴";
        return;
    }

    let total = 0;
    container.innerHTML = "";
    
    cart.forEach((item, index) => {
        total += item.price;
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; background: #f9f9f9; padding: 10px; border-radius: 8px;">
                <div style="display:flex; align-items:center; gap: 10px;">
                    <img src="${item.img}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;">
                    <span>${item.name}</span>
                </div>
                <b>${item.price} ₴</b>
            </div>
        `;
    });
    
    totalDisplay.innerText = `Разом: ${total.toFixed(2)} ₴`;
}

// Очищення кошика після оплати
function processPayment() {
    const phone = document.getElementById('user-phone').value;
    if (!phone) {
        alert("Введіть номер телефону для оформлення!");
        return;
    }

    localStorage.removeItem('eloriaCart'); // Видаляємо товари
    alert("Дякуємо за покупку! Наш менеджер зв'яжеться з вами.");
    window.location.href = "index.html"; // Повернення на головну
}

// Запуск при завантаженні будь-якої сторінки
document.addEventListener('DOMContentLoaded', () => {
    updateCartIcon();
    renderCart();
});
