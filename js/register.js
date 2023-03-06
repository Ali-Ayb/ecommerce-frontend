let register_btn = document.getElementById("register-button");
register_btn.addEventListener("click", register);


function register {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let birth_date = document.getElementById('birth_date').value;
    let password = document.getElementById('password_signup').value;
    const genderRadios = document.getElementsByName('gender');

  // Loop through all radio buttons
  for (let i = 0; i < genderRadios.length; i++) {
    // Check if the radio button is checked
    if (genderRadios[i].checked) {
      // If checked, get the value of the radio button
      const selectedGender = genderRadios[i].value;
      console.log('Selected gender:', selectedGender);
    }
  }

}