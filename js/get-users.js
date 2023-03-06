window.onload = () => {
  getUsers();
  const products_btn = document.getElementById("products-btn");
  const user_btn = document.getElementById("users-btn");
  products_btn.addEventListener("click", getProducts);
  user_btn.addEventListener("click", getUsers);
};

const getUsers = () => {
  const tbody = document.getElementById("tbody");
  const thead = document.getElementById("thead");
  const content_title_btn = document.getElementById("content-title");
  content_title_btn.textContent = "Users";
  thead.innerHTML = `<tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Gender</th>
                </tr>`;

  let data = "";
  axios
    .get("http://localhost/ecommerce_backend/list_users_api.php")
    .then((result) => {
      result.data.forEach((element) => {
        data += `<tr>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>${element[2]}</td>
                <td>${element[3]}</td>
                <td>${element[4]}</td>
                </tr>`;
      });
      tbody.innerHTML = data;
    });
};

const getProducts = () => {
  const tbdoy = document.getElementById("tbody");
  const content_title_btn = document.getElementById("content-title");
  const thead = document.getElementById("thead");
  thead.innerHTML = `<tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Image</th>
                <th>quantity</th>
                </tr>`;

  content_title_btn.textContent = "Products";
  let data = "";
  axios
    .get("http://localhost/ecommerce_backend/list_products_api.php")
    .then((result) => {
      result.data.forEach((element) => {
        data += `<tr>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td>${element[2]}</td>
                <td><img src='http://localhost/ecommerce_backend/${element[3]}' height='100px' width='100px'/></td>
                <td>${element[4]}</td>
                </tr>`;
      });
      tbdoy.innerHTML = data;
    });
};
