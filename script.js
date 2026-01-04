// --- ЛОГІКА КОШИКА ---

function addToCart(name, price, img) {
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    cart.push({ name: name, price: price, img: img });
    localStorage.setItem('eloriaCart', JSON.stringify(cart));
    
    updateCartCount();
    
    // Візуальний ефект при додаванні
    const btn = event.target;
    const originalText = btn.innerText;
    btn.innerText = "Додано ✅";
    btn.style.background = "#2ed573";
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = "black";
    }, 1000);
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('eloriaCart')) || [];
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// --- СЕРДЕЧКА ТА ЗАВАНТАЖЕННЯ ---

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Лайк для карток товарів
    document.querySelectorAll('.product-heart').forEach(heart => {
        heart.addEventListener('click', function () {
            this.classList.toggle('liked');
            this.style.transform = 'scale(1.5)';
            setTimeout(() => {
                this.style.transform = this.classList.contains('liked') ? 'scale(1.2)' : 'scale(1)';
            }, 200);
        });
    });

    // Пульсація серця в шапці
    const mainHeart = document.querySelector('header .heart');
    if (mainHeart) {
        mainHeart.addEventListener('click', function () {
            this.style.transform = 'scale(1.4)';
            setTimeout(() => this.style.transform = 'scale(1)', 300);
        });
    }
});
