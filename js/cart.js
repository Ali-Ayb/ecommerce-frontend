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

const cart = document.getElementsByClassName("check__cart")[0];
console.log(cart);
array.map(data => {
    const product = document.createElement("div");
    const hr =document.createElement("hr");
    product.innerHTML = `<div class="check__product">
    <img src=${data.image} alt="" />
    <div class="check__product__info">
        <h5>
            ${data.name}
        </h5>
      <p>
      ${data.description}
      </p>
      <div class="buttons">
        <input id="in1" type="number" value="1">
        <button class="update">update</button>
        <button class="delete">x</button>
      </div>
      <h6>$${data.price}</h6>
    </div>`
    cart.appendChild(hr)
    cart.appendChild(product);
    
})