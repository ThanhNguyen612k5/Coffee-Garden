let isLogin = localStorage.getItem("login");

        let username = localStorage.getItem("username");

        let userProfile =
        document.getElementById("userProfile");

        let userName =
        document.getElementById("user-name");

        let loginBtn =
        document.getElementById("loginBtn");

        let registerBtn =
        document.getElementById("registerBtn");

        let cartBtn =
        document.getElementById("cartBtn");

        let logoutBtn =
        document.getElementById("logoutBtn");

        // mặc định ẩn
        userProfile.style.display = "none";

        cartBtn.style.display = "none";

        logoutBtn.style.display = "none";

        // nếu đã đăng nhập
        if(isLogin == "true"){

            // hiện user
            userProfile.style.display = "flex";

            // hiện tên
            userName.innerHTML = username;

            // hiện giỏ hàng
            cartBtn.style.display = "block";

            // hiện logout
            logoutBtn.style.display = "block";

            // ẩn login register
            loginBtn.style.display = "none";

            registerBtn.style.display = "none";
        }

        // đăng xuất
        function logout(){

            localStorage.removeItem("login");

            localStorage.removeItem("username");

            localStorage.removeItem("cart");

            location.reload();
        }
