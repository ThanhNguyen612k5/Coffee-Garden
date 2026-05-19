let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

        let cartList =
        document.getElementById("cart-list");

        let total = 0;

        function showCart(){

            cartList.innerHTML = "";

            total = 0;

            cart.forEach((item,index) => {

                let li =
                document.createElement("li");

                li.innerHTML = `

                    <div class="cart-item">

                        <!-- HÌNH -->
                        <img src="${item.image}" alt="">

                        <!-- THÔNG TIN -->
                        <div class="cart-info">

                            <h4>
                                ${item.name}
                            </h4>

                            <p>
                                Giá:
                                ${item.price.toLocaleString()}đ
                            </p>

                            <p>
                                Số lượng:
                                ${item.quantity}
                            </p>

                        </div>

                        <!-- NÚT XÓA -->
                        <button
                            class="delete-btn"
                            onclick="removeItem(${index})">

                            Xóa

                        </button>

                    </div>

                `;

                cartList.appendChild(li);
                total +=item.price * item.quantity;
            });

            document.getElementById("total")
            .innerHTML =
            "Tổng: " +
            total.toLocaleString() + "đ";
        }

        function removeItem(index){

            if(cart[index].quantity > 1){

                cart[index].quantity -= 1;
            }
            else{
                cart.splice(index,1);
            }
            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );
            showCart();
        }
        showCart();