const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".main-container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");
const sign_up_button = document.querySelector("#sign-up-button");
const login_button = document.querySelector("#login-button");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
  container.classList.add("sign-up-mode2");
});

sign_in_btn2.addEventListener("click", () => {
  container.classList.remove("sign-up-mode2");
});

sign_up_button.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.querySelector("#input-email input").value;
  const password = document.querySelector("#input-password input").value;
  const confirm_password = document.querySelector(
    "#input-confirm-password input"
  ).value;

  if (email && password && confirm_password) {
    container.classList.remove("sign-up-mode");
    alert("Sign up successful, you can login now");
  } else {
    alert("Make sure the email and password have been filled in correctly");
  }
});

login_button.addEventListener("click", function (event) {
  event.preventDefault();

  const email2 = document.querySelector("#input-email2 input").value;
  const password2 = document.querySelector("#input-password2 input").value;

  if (email2 && password2) {
    alert("Login successful");
  } else {
    alert("Make sure the email and password have been filled in correctly");
  }
});
