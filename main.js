function convertDollar(){
    var input=document.getElementById("dollar").value;
    var result=document.getElementById("result");

    if (input < 0 || input=="") {
        result.innerHTML= "ERROR";
        document.getElementById("dollar").value="";
    }

    else if(isNaN(input)==true){
        result.innerHTML= "Enter Number Not Text";
        document.getElementById("dollar").value="";
    }

    else{
    result.innerHTML = input *50+"$";
    document.getElementById("dollar").value="";
    }
    return false;
}