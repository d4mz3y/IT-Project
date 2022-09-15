var attempt = 5; 
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ( username == "Admin" && password == "plazaict"){
    window.location = "invoice.html";
    return false;
    }

    else{
    attempt --;// Decrementing by one.
    alert("You have "+attempt+" attempt left;");

    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
    }
}