
const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = signupForm.email.value;
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    if (email !== "" && username !== "" && password !== "") {
        // alert("You have successfully logged in.");
        location.reload();
        window.location.href = "../index.html";
    } else {
        signupErrorMsg.style.opacity = 1;
    }
})