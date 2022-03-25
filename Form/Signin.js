let toggleSignIn = () => {
  let blur = document.getElementById("blur");
  blur.classList.toggle("active");
  let signin = document.getElementById("SignIn");
  signin.classList.toggle("active");
  
};
toggleSignIn();

let closeSign = document.getElementById("close");
    closeSign.addEventListener("click", ()=>{
        toggleSignIn();
        localStorage.setItem("SignUp",'closeSignUp')
        setTimeout(()=>{ location.assign("./Welcome.html")}, 150);
    })
let changeSignUp = document.getElementById("changeSignUp")
    changeSignUp.addEventListener("click", ()=>{
        toggleSignIn();
        localStorage.setItem("SignUp",1)
    })


let Signin = document.querySelector(".SignIn");

let user = localStorage.getItem("user");
let userlist = [];
if (user) {
  userlist = JSON.parse(localStorage.getItem("user"));
}

Signin.onsubmit = function (e) {
  e.preventDefault();

  let email = Signin.email.value;
  let password = Signin.password.value;

  for (let i = 0; i < userlist.length; i++) {
    if (userlist[i].email == email) {
      if (userlist[i].password == password) {
        sweetalert("success", "Signed in successfully");
        setTimeout(function () {
          location.assign("../Home/Home.html");
        }, 2000);
      } else {
        sweetalert("error", "Wrong password or email");
      }
      break;
    } else {
      sweetalert("error", "Email is not exist");
    }
  }
};

function sweetalert(icon, mess) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: icon,
    title: mess,
  });
}
