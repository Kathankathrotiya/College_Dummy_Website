function validatecontactForm() {
    var name = document.forms[0]["name"].value;
    var email = document.forms[0]["email"].value;
    var subject = document.forms[0]["subject"].value;
    var message = document.forms[0]["message"].value;
    var errors = false;

    if (name == "") {
        document.getElementById("name-error").innerHTML = "Name must be filled out";
        errors = true;
    }
    else if(!/^[a-zA-Z ]+$/.test(name)) {
            document.getElementById("name-error").innerHTML = "Name must contain only alphabets";
        errors=true;
    } else {
        document.getElementById("name-error").innerHTML = "";
    }
    
    if (email == "") {
        document.getElementById("email-error").innerHTML = "Email must be filled out";
        errors = true;
    } 
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email ID as username@domain.tld";
        errors=true;
    }
    else {
        document.getElementById("email-error").innerHTML = "";
    }
    
    if (subject == "") {
        document.getElementById("subject-error").innerHTML = "Subject must be filled out";
        errors = true;
    }
    else if(!/^[a-zA-Z ]+$/.test(subject)) {
        document.getElementById("subject-error").innerHTML = "Subject must contain only alphabets";
        errors=true;
    }  
    else {
        document.getElementById("subject-error").innerHTML = "";
    }
  
  if (message == "") {
      document.getElementById("message-error").innerHTML = "Message must be filled out";
      errors = true;
    } else {
        document.getElementById("message-error").innerHTML = "";
    }
    
    if (errors) {
        return false;
    } else {
        return true;
    }
}
// let navLinks = document.getElementById("navLinks");
// function showMenu(){
//     navLinks.style.top = '0';
// }
// function hideMenu(){
//     navLinks.style.top = '-800px'
// }