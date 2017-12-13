var good = false;
function validate(){
var pass = document.getElementById('pwd').innerHTML.value;
var passConfirm = document.getElementById('pwd2').innerHTML.value;
if (pass === passConfirm){
  
    alert("gracefully confirmed passwords");
    good = true;
}else {
    alert("WRONG! pasword confirmation failed");
    good = false;
}
console.info(pass);
console.info(passConfirm);
};

onclick="validate()"