window.onload = () => {
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const address = document.getElementById("address");
  const state = document.getElementById("state");
  const city = document.getElementById("city");
  const contact_number = document.getElementById("number");

  const data = new FormData();
  data.append("user_id", 1);
  axios
    .post("http://localhost//ecommerce-backend/get_profile_api.php", data)
    .then((result) => {
      const DATA = result.data;
      Object.keys(DATA).forEach((data) => {
        fname.value = DATA.first_name;
        lname.value = DATA.last_name;
        email.value = DATA.email;
      });
    })
    .catch((erro) => {
      console.log(erro);
    });

  axios
    .post("http://localhost//ecommerce-backend/get_location_api.php", data)
    .then((data) => {
      const  LOCATION_DATA = data.data
      Object.keys(LOCATION_DATA).forEach(data => {
          address.value = LOCATION_DATA.address;
          state.value = LOCATION_DATA.state;
          city.value = LOCATION_DATA.city;
          contact_number.value = LOCATION_DATA.contact_number;
          

      })
    })
    .catch((erro) => {
      console.log(erro);
    });
};
const save = document.getElementById("save");

save.addEventListener("click", () => {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const contact_number = document.getElementById("number").value;

  const data = new FormData();
  data.append("fname", fname);
  data.append("lname", lname);
  data.append("email", email);
  data.append("password", password);
  data.append("address", address);
  data.append("contact_number", fname);
  data.append("city", city);
  data.append("state", state);
  data.append("user_id", 1);
  axios
    .post("http://localhost//ecommerce-backend/edit_profile_api.php", data)
    .then((data) => console.log(data.result))
    .catch((error) => console.log(error));
});
