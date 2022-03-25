//Open Blur Form:
let toggleSignUp = ()=>{
    let blur = document.getElementById('blur');
    blur.classList.toggle("active")
    let signup = document.getElementById('SignUp');
    signup.classList.toggle("active")
}
let toggleSignIn = ()=>{
    let blur = document.getElementById('blur');
    blur.classList.toggle("active")
    let signin = document.getElementById('SignIn');
    signin.classList.toggle("active")
}

// //localStorage for change SignIn -> SignUp :
if(localStorage.getItem('SignUp') == 1){
    toggleSignUp()
}




//list localStorage:
let user = localStorage.getItem("user")
let userlist = []
if (user) {
    userlist = JSON.parse(localStorage.getItem("user"));
}

//Sign Up :
let Signup = document.querySelector(".SignUp")

let error = (query , content) =>{
    document.querySelector(query).innerHTML = content
}

Signup.onsubmit = function (e) {
    e.preventDefault();

    error("#emailerror","")
    error("#passworderror","")

    let email = Signup.email.value;
    let password = Signup.password.value;

    let validate = true;
    
    if(!email){
        error("#emailerror", "Enter a valid email address.");
        validate = false;
    }
    if(!password){
        error("#passworderror", "Enter a valid password.");
        validate = false;
    }
    if(password.length < 6 ){
        error("#passworderror", "Password must be more than 6 characters ");
        validate = false;
    }
    if( password.length > 12){
        error("#passworderror", "Password must be less than 12 characters");
        validate = false;
    }
    for (let i = 0; i < userlist.length; i++) {
    if (userlist[i].email == email) {
        sweetalert("error", "Registered email");
        validate = false;
        } }
    
    if(validate){
        
        let user ={
            email : email,
            password : password,
        }
        userlist.push(user)
        localStorage.setItem("user",JSON.stringify(userlist))
        localStorage.setItem("SignUp",2)
        location.assign("./Signin.html")
    }
    
}


//Sign In:
let Signin = document.querySelector(".SignIn")

Signin.onsubmit = function (e) {
    e.preventDefault();

    let email = Signin.email.value;
    let password = Signin.password.value;

    for (let i = 0; i < userlist.length; i++) {
        if (userlist[i].email == email) {
            if (userlist[i].password == password) {
                sweetalert("success", "Signed in successfully");
                setTimeout(function(){ location.assign("../Home/Home.html")}, 2000);
            } else {
                sweetalert("error","This password is incorrect")
            }
            break
        } else {
            sweetalert("error", "Email is not exist")
        }
    }
}

function sweetalert(icon, mess) {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: icon,
        title: mess
    })
}
