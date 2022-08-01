const questions = document.querySelectorAll('.question-answer');

questions.forEach(function(question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
})
function validateForm(){
    var fullname=document.form.name.value;  
var password=document.form.password.value;  
var email=document.form.email.value;  
var username=document.form.username.value;  
var number=document.form.number.value;  
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");     
if ( fullname=="" || password=="" || email=="" || username=="" || number==""){  
    alert("Fill all the details");  
    return false;  
  }
else if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    } 
else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address \n");  
      return false;  
 }
 else if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) && ( form.gender[2].checked == false ) )
 {
 alert ( "Please choose your Gender: Male or Female" );
 return false;
 }
}