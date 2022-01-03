//FUNCTION THAT GETS TRIGGERED ON FORM SUBMISSION
const formButton = document.querySelector("#form-submitted")
const successMessage = document.querySelector(".successMessage")
formButton.addEventListener("click", () => {
    successMessage.style.display = "block"
})