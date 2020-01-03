// Below Function Executes On Form Submit
var submitBtn = document.querySelector('.submit')
var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");

var emailReg = /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/
var pwdReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

submitBtn.addEventListener('click', e => ValidationEvent(e))

// function ValidationEvent(e) {
//     e.preventDefault()
//     // Regular Expression For Email
//     var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
//     // Conditions
//     if (name != '' && email != '' && contact != '') {
//     if (emailReg.test(email)) {
//     if (document.getElementById("male").checked || document.getElementById("female").checked) {
//     if (contact.length == 10) {
//     alert("All type of validation has done on OnSubmit event.");
//     return true;
//     } else {
//     alert("The Contact No. must be at least 10 digit long!");
//     return false;
//     }
//     } else {
//     alert("You must select gender.....!");
//     return false;
//     }
//     } else {
//     alert("Invalid Email Address...!!!");
//     return false;
//     }
//     } else {
//     alert("All fields are required.....!");
//     return false;
//     }
//     }

function ValidationEvent(e){
    e.preventDefault()
    if(name.value === "" || email.value === "" || password.value === ""){
        return alert('Please fill in all the fields')
    } else if(!emailReg.test(email.value)){
        alert('Please enter a valid email!!')
    }else if(!pwdReg.test(password.value)){
        alert('Password must be at least 8 characteres and one Uppercase...')
    }else {
        name.value = "";
        email.value = "";
        password.value = "";
    }

}