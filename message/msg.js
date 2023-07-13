const msginput=document.getElementById("inputmsg");
function message(){
    document.getElementById("outputmsg").console.log=msginput.value;
    msginput.value="";
}