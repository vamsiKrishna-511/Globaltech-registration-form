document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); 


    var name = document.getElementById("name").value;
    var college = document.getElementById("college").value;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;


    alert("Registration successful!");
});