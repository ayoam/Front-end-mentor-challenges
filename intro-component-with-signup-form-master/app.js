let submitBtn = document.getElementById("submitBtn");
let firstName = document.getElementById("firstNameInpt");
let lastName  = document.getElementById("lastNameInpt");
let email = document.getElementById("emailInpt");
let pwd = document.getElementById("pwdInpt");
let form = document.querySelector(".register_form");


submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let valide = true;
    if(firstName.value.trim()==""){
        setError(firstName,"First Name cannot be empty");valide = false;
    }else{removeError(firstName,"First Name")}

    if(lastName.value.trim()==""){
        setError(lastName,"Last Name cannot be empty");valide = false;
    }else{removeError(lastName,"Last Name")}

    if(email.value.trim()==""){
        setError(email,"Email Address cannot be empty");valide = false;
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value.trim())){
        setError(email,"Looks like this is not an email");valide = false;
    }else{removeError(email,"Email Address")}

    if(pwd.value.trim()==""){
        setError(pwd,"Password cannot be empty");valide = false;
    }else if(pwd.value.trim().length<8){
        setError(pwd,"Password should contain at least 8 characters");valide = false;
    }else{removeError(pwd,"Password")}
    
    if(valide==true){
        form.submit();
    }
})

function setError(elt,msg){
    elt.classList.add("error");
    elt.placeholder="";
    let p = elt.parentElement.querySelector(".validation_text");
    let icon = elt.parentElement.querySelector("img");
    icon.style.visibility="visible";
    p.textContent=msg;
    p.style.display="block";
}

function removeError(elt,placeholder=""){
    elt.classList.remove("error");
    elt.placeholder=placeholder;
    let p = elt.parentElement.querySelector(".validation_text");
    let icon = elt.parentElement.querySelector("img");
    icon.style.visibility="hidden";
    p.style.display="none";
}

