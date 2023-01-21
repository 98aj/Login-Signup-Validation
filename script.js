//Switch user
let change1 = document.querySelector('.btnSwitch');
let change2 = document.querySelector('.btnSwitch1');
let signupForm = document.querySelector('.regesterForm');
let loginForm = document.querySelector('.loginForm');
let submitBtn = document.querySelector('#submitBtn');



change1.addEventListener('click', (e)=>{
    signupForm.classList.add('hide')
    loginForm.classList.remove('hide')
})
change2.addEventListener('click', (e)=>{
    loginForm.classList.add('hide');
    signupForm.classList.remove('hide')
})

//sign-up form validation



signupForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    let valid = validation();
    
    if(valid==true){
        let data = getData();
        signupForm.classList.add('hide')
        loginForm.classList.remove('hide')
    }
})

function errorMs(element, ms, i) {
    let displaymse = document.getElementsByClassName('formerror')[i]

    displaymse.innerText = ms;
}

function success(element,ms, i) {
    let displaymss = document.getElementsByClassName('formerror')[i]

    displaymss.innerText = '';
}

function validation() {
    const namevalue = document.forms[0].name.value.trim();
    const emailvalue = document.forms[0].email.value.trim();
    const password1value = document.forms[0].password1.value.trim();
    const password2value = document.forms[0].password2.value.trim();
    const upperCaseLetters = /[A-Z]/g;
    const lowerCaseLetters = /[a-z]/g;
    const numbers = /[0-9]/g;

    
    
    if (namevalue.length<2) {
        errorMs(namevalue, 'Length is too short', 0)
       return false
    }
    else{
        success(namevalue,'', 0)
        
    }

    if(password1value.match(upperCaseLetters) && password1value.match(lowerCaseLetters) && password1value.match(numbers) && password1value!=emailvalue){
        success(password1value,'', 2);
         
    }
    else{
        errorMs(password1value, 'Passwords should have at least 1 capital letter, 1 small, 1 number and 1 special characters', 2);
        return false

    }
    if( password1value!=password2value){
        errorMs(password2value, "Password Does Not Match", 3)
       return false
        
    }
    else{
        success(password2value,'', 3);
        
    }

    return true
    
    
}

//collectiing data from form

let formData = [];
let ans = 1
function getData(){
    const namevalue = document.forms[0].name.value.trim();
    const emailvalue = document.forms[0].email.value.trim();
    const password1value = document.forms[0].password1.value.trim();
    const password2value = document.forms[0].password2.value.trim();
    const userData = {
        id: ans,
        username: namevalue,
        emailId: emailvalue,
        password: password1value
    }  
    formData.push(userData);
    document.forms[0].reset();
    ans += 1;
}

//login form validation

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let logValid = loginValidation()

    if(logValid===true){
        window.open('www.google.com', 'blank')
    }
})

function loginValidation(){
    const username = document.forms[1].loginName.value.trim();
    const pass = document.forms[1].loginPassword.value.trim();

    const u = userValid(username, pass);
    
    if(u==true){
        success(username, '', 4)
        
        return true
        
    }
    else{
        errorMs(username,'Invalid Username or password', 4)
        
        return false
    }
}

function userValid(name, password){
    for (let i = 0; i < formData.length; i++) {
        let answer1 = formData[i].emailId
        let answer2 = formData[i].password
        if (answer1===name && answer2===password) {
            return true
        }
        
    }
    return false
}
