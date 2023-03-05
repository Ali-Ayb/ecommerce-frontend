let is_user = false;
let is_billing_accepted = false;
let pay_method  = false;

window.onload = ()=> {
    console.log("init");
}

// if (sessionStorage.getItem("userId")){
//     is_billing_accepted = true;
//     let id = sessionStorage.getItem("userId");
// }
const billing = document.getElementById("billing_content");
const payment = document.getElementById("payment_content");
const submit_button = document.getElementById("submit");
const login = document.getElementById("login");
const register = document.getElementById("register");

login.addEventListener("click",()=>{
    window.location.href = "./login.html";
})
register.addEventListener("click",()=>{
    window.location.href = "./register.html";
})

const testToShow = (element,permition) => {
    console.log(permition);
    if(permition){
        element.style.display = "block";
        element.style.transition = "1ms";
    }
    else {
        element.style.display = "none";
    }
}

testToShow(billing,is_user);
testToShow(payment,is_billing_accepted);
testToShow(submit_button,pay_method);

