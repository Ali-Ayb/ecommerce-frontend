window.onload = () => {
  let add_product_btn = document.getElementById("add_product_btn");

  add_product_btn.addEventListener("click", addProduct);

  function addProduct() {
    let product_name = document.getElementById("product_name").value;
    let product_brand = document.getElementById("product_brand").value;
    let product_price = document.getElementById("product_price").value;
    let product_img = document.getElementById("product_img").files[0].name;
    let product_category = document.getElementById("product_category").value;
    let product_description = document.getElementById(
      "product_description"
    ).value;
    let product_model_number = document.getElementById(
      "product_model_number"
    ).value;
    let product_quantity = document.getElementById("product_quantity").value;

    let data = new FormData();
    data.append("product_name", product_name);
    data.append("product_brand", product_brand);
    data.append("product_price", product_price);
    data.append("product_img", product_img);
    data.append("product_category", product_category);
    data.append("product_description", product_description);
    data.append("product_model_number", product_model_number);
    data.append("product_quantity", product_quantity);
    console.log("here");
    axios
      .post("http://localhost/ecommerce_backend/add_product_api.php", data)
      .then((result) => {
        console.log(result.data.response);
        if (result.data.response == "true") {
          console.log("all good");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
