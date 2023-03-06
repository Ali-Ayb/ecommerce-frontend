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
            console.log(parseInt(data.product_price));
            
            product.innerHTML = `
            <h3>${data.product_name}</h3>
            <img src=${"." + data.product_img}>
            <div class="product-price">
                <h4>${data.product_price} $</h4>
                <h4><s>${parseInt(data.product_price)+ 20} $</s></h4>
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



       