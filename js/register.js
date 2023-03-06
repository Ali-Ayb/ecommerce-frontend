let register_btn = document.getElementById("register-button");
register_btn.addEventListener("click", register);

function register() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let birth_date = document.getElementById("birth_date").value;
  let gender = null;
  const gender_name = document.getElementsByName("gender");

  for (let i = 0; i < gender_name.length; i++) {
    if (gender_name[i].checked) {
      let gender = gender_name[i].value;
    }
  }

  let data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("first_name", first_name);
  data.append("last_name", last_name);
  data.append("birth_date", birth_date);
  data.append("gender", gender);

  axios({
    method: "post",
    url: "http://localhost/ecommerce_backend/register_api.php",
    data: data,
  })
    .then((result) => {
      console.log(result);
      if (result.data.status == "success") {
        alert("registered succesfully");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
