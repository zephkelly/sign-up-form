const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")

const errorMessage = document.querySelector("#error-message")

confirmPassword.addEventListener("input", checkPassword)

function checkPassword() {
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Invalid field.")
    confirmPassword.setCustomValidity("Invalid field.")
    errorMessage.classList.remove("hide")
  } else {
    password.setCustomValidity("")
    confirmPassword.setCustomValidity("")
    errorMessage.classList.add("hide")
  }
}
