window.onload = () => {
  axios
    .get("http://localhost//ecommerce_backend/cart_api.php")
    .then((res) => {
      const result = res.data;
      const DATA = result.response;
      const cart = document.getElementsByClassName("check__cart")[0];
      const total = document.getElementById("total");
      total.innerHTML = "$" + result.total;
      console.log(cart);
      if (DATA.length === 0) {
        const product = document.createElement("div");
        product.className = "nothing";
        product.innerHTML = "<h1> you have nothing in cart</h1>";
        cart.appendChild(product);
        return;
      }
      DATA.map((data) => {
        console.log(data);
        const product = document.createElement("div");
        product.id = data.cart_id;
        const hr = document.createElement("hr");
        product.innerHTML = `<div class="check__product">
          <img src='http://localhost/ecommerce_backend/${data.img}'/>
          <div class="check__product__info">
              <h5>
                  ${data.name}
              </h5>
            <p>
            ${data.desc}
            </p>
            <div class="buttons">
              <input id="in" type="number" value=${data.quantity}>
              <button id = "update${data.cart_id}" class="update">update</button>
              <button  id = "remove${data.cart_id}" class="delete">x</button>
            </div>
            <h6>$${data.price}</h6>
          </div>`;
        cart.appendChild(hr);
        cart.appendChild(product);

        const update = document.getElementById(`update${data.cart_id}`);
        const remove = document.getElementById(`remove${data.cart_id}`);

        update.addEventListener("click", () => {
          const input = document.getElementById("in").value;
          const d = new FormData();
          d.append("cart_id", data.cart_id);
          d.append("quantity", input);
          axios
            .post("http://localhost//ecommerce_backend/update_cart_api.php", d)
            .then((result) => {
              console.log(result.response.result);
            })
            .catch((error) => {
              console.log(error);
            });
        });

        remove.addEventListener("click", () => {
          const d = new FormData();
          d.append("cart_id", data.cart_id);
          cart.removeChild(product);
          axios
            .post(
              "http://localhost//ecommerce_backend/delete_from_cart_api.php",
              d
            )
            .then((result) => {
              console.log(result.response.result);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
