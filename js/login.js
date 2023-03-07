window.onload = () => {
  let login_btn = document.getElementById("login-button");
  login_btn.addEventListener("click", login);

  function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = new FormData();
    data.append("email", email);
    data.append("password", password);

    axios
      .post("http://localhost/ecommerce_backend/login_api.php", data)
      .then((result) => {
        console.log(result.data.status);
        if (result.data.user_id) {
          console.log(result.data.user_id);
          sessionStorage.setItem("user_id", result.data.user_id);
          // alert("login succesfully");
          window.location.href = "../index.html";
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
