const form = document.getElementById('form');
const fname = document.getElementById('name');
const em = document.getElementById('em');
const phno = document.getElementById('phno');
const pwd = document.getElementById('pwd');
const cpwd = document.getElementById('cpwd');

const  nerror = document.getElementById('nerror');
const  eerror = document.getElementById('eerror');
const  perror = document.getElementById('perror');
const  pserror = document.getElementById('pserror');
const  cpserror = document.getElementById('cpserror');



form.addEventListener('submit',(e) =>{
    
    if(fname.value.length === 0){
        e.preventDefault();
        nerror.innerHTML = "name is required";
    }
    else if(fname.value.length <=5 && fname.value.length>0){
        e.preventDefault();
        nerror.innerHTML = "name must contain more than 4 characters";
    }
    else{
        nerror.innerHTML = "";
    }

    if(em.value.length === 0){
        e.preventDefault();
        eerror.innerHTML = "email is required";
    }
    else if(!em.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        e.preventDefault();
        eerror.innerHTML = "enter correct email";
    }
    else{
        eerror.innerHTML = "";
    }

    if(phno.value.length === 10 && phno.value!=123456789){
        perror.innerHTML = "";
    }
    else if(phno.value.length === 0){
        e.preventDefault();
        perror.innerHTML = "enter your phone number";
    }
    else{
        e.preventDefault();
        perror.innerHTML = "enter valid phone number";
    }

    if(pwd.value.length === 0){
        e.preventDefault();
        pserror.innerHTML = "set strong password";
    }
    else if(pwd.value == "password" || pwd.value == fname.value){
        e.preventDefault();
        pserror.innerHTML = "password is not strong";
    }
    else if(pwd.value.length<8){
        e.preventDefault();
        pserror.innerHTML = "password must be 8 characters";
    }
    else{
        pserror.innerHTML = "";
    }

    if(cpwd.value!=pwd.value){
        e.preventDefault();
        cpserror.innerHTML = "password doesn't match";
    }
    else{
        cpserror.innerHTML = "";
    }

})