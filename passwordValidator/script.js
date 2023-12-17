const password = document.getElementById("password");
const confpassword = document.getElementById("Cnfpassword");
const submitButton = document.getElementById("submitButton"); // Assuming your submit button has an id

submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevents the form from submitting by default

    const val = password.value;
    const val1 = confpassword.value;

    if (val.trim() === "" || val1.trim() === "") {
        alert("Please fill in all the fields");
    } else if (val === val1) {
        alert("Login successful");
        // You can submit the form or perform further actions here if needed
    } else {
        alert("Passwords do not match");
    }
});
