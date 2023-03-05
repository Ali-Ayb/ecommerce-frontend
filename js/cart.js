const array = [
    {
        name : "micss - alinj",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas",
        price: "119",
        image : "https://macrotronics.net/images/razer-gaming-mouse-bungee-v3-rc21-01560100-r3u1-thumb.jpg"
    },
    {
        name : "micss - alinj",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas",
        price: "119",
        image : "https://macrotronics.net/images/razer-gaming-mouse-bungee-v3-rc21-01560100-r3u1-thumb.jpg"
    },

];
window.onload = () => {
   axios.get("http://localhost//ecommerce-backend/cart_api.php").then((res)=>{
        const DATA = res.data;
        console.log(DATA);

        const cart = document.getElementsByClassName("check__cart")[0];
        console.log(cart);
        DATA.map((data) => {
          const product = document.createElement("div");
          const hr = document.createElement("hr");
          product.innerHTML = `<div class="check__product">
          <img src=${data.img} alt="" />
          <div class="check__product__info">
              <h5>
                  ${data.name}
              </h5>
            <p>
            ${data.desc}
            </p>
            <div class="buttons">
              <input id="in1" type="number" value="1">
              <button class="update">update</button>
              <button class="delete">x</button>
            </div>
            <h6>$${data.price}</h6>
          </div>`;
          cart.appendChild(hr);
          cart.appendChild(product);
        });

   }).catch((err) => {
    console.error(err)
});
  
};
