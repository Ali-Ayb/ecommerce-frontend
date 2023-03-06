window.onload = () => {
  const main = document.getElementById("main");
  const img = sessionStorage.getItem("img");
  const price = sessionStorage.getItem("price");
  const details = sessionStorage.getItem("desc");
  const name = sessionStorage.getItem("name");
  const product = document.createElement("div");
  console.log(img);
  product.className = "body-row";
  product.innerHTML = ` <div class="image">
    <img src=${img}>
</div>
<div class="product-details">
    <div>
        <h2>${name}</h2>
        <h3>${price} $</h3>
</div>
    <button class="action-button"><img src="../images/cart.png" class="cart-image add">
        Add To Cart</button>
    <div>
        <h4>Product details:</h4>
        <p>${details}!</p> 
    </div>
</div>`;
main.appendChild(product);
};



