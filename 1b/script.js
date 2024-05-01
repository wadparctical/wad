document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(registrationForm);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Save data to local storage
    const userList = JSON.parse(localStorage.getItem("userList")) || [];
    userList.push(userData);
    localStorage.setItem("userList", JSON.stringify(userList));

    // Redirect to data list page
    window.location.href = "data-list.html";
  });
});
