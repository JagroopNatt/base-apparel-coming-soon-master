const submitBtn = document.querySelector(".submit");

const email = document.querySelector(".email");
const errorIcon = document.querySelector(".error");
const errorMsg = document.querySelector(".error-msg");

let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitBtn.addEventListener("click", function (e) {
  isEmailValid = email.value;
  console.log(isEmailValid);

  if (isEmailValid === "") {
    errorIcon.classList.add("active");
    errorMsg.classList.add("active");
  } else if (!isEmailValid.match(regex)) {
    errorIcon.classList.add("active");
    errorMsg.classList.add("active");
  } else {
    email.value = "";
  }
  setTimeout(() => {
    errorIcon.classList.remove("active");
    errorMsg.classList.remove("active");
  }, 8000);

  e.preventDefault();
});
