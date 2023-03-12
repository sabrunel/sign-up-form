document.forms["signup-form"].addEventListener("submit", function(e) {

    e.preventDefault();
    const form = this;
    const requiredInputs = form.querySelectorAll("[required]");

    // Generic validation for required inputs
    for (let i=0; i<requiredInputs.length; i++) {
        if (!requiredInputs[i].value) {
            requiredInputs[i].nextElementSibling.innerText = "Please enter a valid value";
            requiredInputs[i].setAttribute("aria-invalid", "true");
        } else {
            requiredInputs[i].nextElementSibling.innerText = "";
            requiredInputs[i].setAttribute("aria-invalid", "false");
        }
    }

    // Field specific validation
    const passwordValue = form["password"].value.trim();
    const passwordConfirmValue = form["confirm-password"].value.trim();

    console.log(passwordValue);
    console.log(passwordConfirmValue);
 
    if (passwordValue !== passwordConfirmValue) {
        form["confirm-password"].nextElementSibling.innerText = "Passwords don't match";
        form["confirm-password"].setAttribute("aria-invalid", "true");
    } else if (passwordValue === passwordConfirmValue && passwordConfirmValue) {
        form["confirm-password"].nextElementSibling.innerText = "";
        form["confirm-password"].setAttribute("aria-invalid", "false");
    }
})