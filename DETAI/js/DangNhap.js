function login(){

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");
    if(username != "" && password != ""){

        localStorage.setItem("login", "true");
        localStorage.setItem("username", username);
        message.innerHTML ="🎉 Đăng nhập thành công! Chào mừng bạn đến với Coffee Garden";

        message.style.background = "#28a745";
        message.style.display = "block";

        setTimeout(() => {

            window.parent.location.reload();

        },1500);

        setTimeout(() => {

            message.style.display = "none";

        },3000);
    }
    else{

        message.innerHTML =
        "⚠ Vui lòng nhập đầy đủ thông tin";

        message.style.background = "#dc3545";

        message.style.display = "block";

        setTimeout(() => {
            message.style.display = "none";

        },3000);
    }
}