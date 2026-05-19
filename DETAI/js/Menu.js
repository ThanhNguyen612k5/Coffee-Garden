
function addToCart(name, price, image) {

    // kiểm tra đăng nhập
    let isLogin = localStorage.getItem("login");

    if (isLogin !== "true") {
        showToast("⚠ Bạn cần đăng nhập để thêm vào giỏ hàng");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.name == name);

    if (existing) {
        existing.quantity += 1;
        showToast(`Đã tăng số lượng "${name}" lên ${existing.quantity}`);
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
        showToast(`✔ Đã thêm "${name}" vào giỏ hàng`);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}
    function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;

    document.getElementById("toast").appendChild(toast);

    // hiện toast
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    // tự ẩn
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}
