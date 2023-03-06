window.onload = () => {


    const data = new FormData();
    data.append('user_id', 1);
    data.append('product_id', 1);

    axios
    .post("http://localhost/SFW-php/project3/ecommerce-backend/favorite_api.php",data)
    .then((result) => {
        const  DATA = result.data;
        let productBox = document.getElementById('productBox');
        DATA.map((data) => {
            let product = document.createElement('div');
            product.innerHTML = `
            <h3>Product name goes here</h3>
            <img src="../images/mouses/910-004530-thumb.jpg">
            <div class="product-price">
                <h4>Price $</h4>
                <h4><s>Old Price $</s></h4>
                <input type="checkbox" checked>
            </div>
            <div class="action-buttons">
                <button>Details</button>
                <button>Add To Cart</button>
            </div>`;
            product.className = 'product'
          productBox.appendChild(product)
        })

    })

}



       