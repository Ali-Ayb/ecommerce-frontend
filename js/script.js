const left = document.getElementById("left");
const right = document.getElementById("right");
let icon = document.getElementById("active2");
let login_register = document.getElementsByClassName("active1");
let slideIndex = 1;
let userid = false;
let id = 12

const login = document.getElementById("login");
const register = document.getElementById("register");
login.addEventListener("click",() => {
    window.location.href = "./pages/login.html"
})
register.addEventListener("click",() => {
    window.location.href = "./pages/register.html"
})

if(sessionStorage.getItem("user_id")){
    userid = true;
    id = sessionStorage.getItem("user_id");
}

showSlides(slideIndex);

left.addEventListener("click", () => showSlides((slideIndex -= 1)));
right.addEventListener("click", () => showSlides((slideIndex += 1)));

window.onload = () => {
  const main = document.getElementById("main");
  const laptops = document.getElementById("laptops");
  const mouses = document.getElementById("mouses");
  const keyboards = document.getElementById("Keyboards");
  axios
    .get("http://localhost/ecommerce_backend/get_products_api.php")
    .then((response) => {
      const DATA = response.data;
      DATA.map((data) => {
        const product = document.createElement("div");
        console.log("here");
        product.className = "product";
        product.innerHTML = `   
        <h3>${data.product_name}</h3>
        <img src='http://localhost/ecommerce_backend/${data.product_img}'>
        <div class="product-price">
            <h4>${data.product_price} $</h4>
            <h4><s>${parseInt(data.product_price) + 20} $</s></h4>
            <button id = "favorite${data.product_id}">💜</button>
        </div>
        <div class="action-buttons">
            <button id = "details${data.product_id}">Details</button>
            <button id = "cart${data.product_id}" >Add To Cart</button>
        </div>`;
        if (data.product_category == "laptops") {
          laptops.appendChild(product);
        } else if (data.product_category == "mouses") {
          mouses.appendChild(product);
        } else if (data.product_category == "keyboards") {
          keyboards.appendChild(product);
        }

        const details = document.getElementById(`details${data.product_id}`);
        const cart = document.getElementById(`cart${data.product_id}`);
        const favorit = document.getElementById(`favorite${data.product_id}`);
        console.log(favorit);
        details.addEventListener("click", () => {
          console.log("hererere");
          sessionStorage.setItem("img", `${data.product_img}`);
          sessionStorage.setItem("name", `${data.product_name}`);
          sessionStorage.setItem("price", `${data.product_price}`);
          sessionStorage.setItem("desc", `${data.product_description}`);
          window.location.href = "./pages/product-details.html";
        });
        favorit.addEventListener("click", () => {
            const formData = new FormData();
            formData.append("product_id", data.product_id);
            formData.append("user_id", id);
            axios.post("http://localhost//ecommerce_backend/add_to_favorite.php",formData).then(data => {
                console.log(data);
            }).catch(error => console.log(error))
        })
        cart.addEventListener("click", () => {
          const formData = new FormData();
          formData.append("product_id", data.product_id);
          axios
            .post(
              "http://localhost//ecommerce_backend/add_to_cart_api.php",
              formData
            )
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

let j;
const slides = document.getElementsByClassName("mySlides");

for (j = 0; j < slides.length; j++) {
  slides[j].addEventListener("click", () => {
    window.location.href = "./pages/product-details.html";
  });
}

if (!userid) {
  icon.hidden = true;
} else {
  login_register[0].hidden = true;
  login_register[1].hidden = true;
}
