let is_user = true;
let is_billing_accepted = false;
let pay_method = false;
let id = "";
let method = "";

// if (sessionStorage.getItem("userId")){
//     is_user = true;
//     id = sessionStorage.getItem("userId");
//     testToShow(billing, is_user);
// }
const billing = document.getElementById("billing_content");
const payment = document.getElementById("payment_content");
const submit_button = document.getElementById("submit");
const login = document.getElementById("login");
const register = document.getElementById("register");
const accept = document.getElementById("accept");
const delivery = document.getElementById("delivery");
const visa = document.getElementById("visa");

login.addEventListener("click", () => {
  window.location.href = "./login.html";
});
register.addEventListener("click", () => {
  window.location.href = "./register.html";
});
accept.addEventListener("click", () => {
  is_billing_accepted = true;
  testToShow(payment, is_billing_accepted);
});
delivery.addEventListener("click", () => {
  method = "delivery";
  pay_method = true;
  testToShow(submit_button, pay_method);
});
visa.addEventListener("visa", () => {
  method = "visa";
  pay_method = true;
  testToShow(submit_button, pay_method);
});

submit_button.addEventListener("click", () => {
  const data = new FormData();
  data.append("user_id", 1);
  data.append("cart_id", 1);
  data.append("method", method);
  axios
    .post("http://localhost//ecommerce_backend/chechout_api.php", data)
    .then(function (res) {
      console.log(res.data.result);
      // window.location.href = "../index.html";
    })
    .catch(function (err) {
      console.error(err);
    });
});

const testToShow = (element, permition) => {
  if (permition) {
    element.style.display = "block";
    element.style.transition = "1ms";
  } else {
    element.style.display = "none";
  }
};

testToShow(billing, is_user);
testToShow(payment, is_billing_accepted);
testToShow(submit_button, pay_method);
