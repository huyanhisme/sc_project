let toggleNoti = () => {
  noti();
  renderMsg({
    title: "Notifications",
    options: 'Close',
    content: "No notifications",
    bottom:"View all notifications"
  });
};

let toggleMess = () => {
  mess();
  renderMsg({
    title: "Messages",
    options: `<i class="fal fa-times"></i>`,
    content: "No Messages",
    bottom :'View all messages'
  });
};
let toggleSet = () => {
  set();
  renderSet();
};

let noti = () => {
  document.getElementById("show_dropdown").classList.add("selected");
  document.querySelector(".noti").classList.add("selected");
  document.querySelector(".message").classList.remove("selected");
  document.getElementById("dropdown_set").classList.remove("active");
};

let mess = () => {
  document.getElementById("show_dropdown").classList.add("selected");
  document.querySelector(".noti").classList.remove("selected");
  document.querySelector(".message").classList.add("selected");
  document.getElementById("dropdown_set").classList.remove("active");

};

let set = () => {
  document.getElementById("dropdown_set").classList.toggle("active");
  document.getElementById("show_dropdown").classList.remove("selected");
  document.querySelector(".message").classList.remove("selected");
  document.querySelector(".noti").classList.remove("selected");
};

let close_dropdown = () => {
  document.getElementById("show_dropdown").classList.remove("selected");
  document.querySelector(".noti").classList.remove("selected");
  document.querySelector(".message").classList.remove("selected");
};

let renderMsg = (data) => {
  let content = document.querySelector(".dropdown_click");
  let html = `<div class="top">
    <h2>${data.title}</h2>
    <button onclick="close_dropdown()">${data.options}</button>
    </div>
    <div class="middle">
    <div class="load-circles selected">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>        
    </div>
    </div>
    <div class="bottom">
        <div class="content">${data.bottom}</div>
        </div>`;
  content.innerHTML = html;

  setTimeout(function () {
    content.innerHTML = `<div class="top">
        <h2>${data.title}</h2>
        <button onclick="close_dropdown()">${data.options}</button>
        </div>
        <div class="middle">
        <div class="content">${data.content}</div>
        </div>
        <div class="bottom">
        <div class="content">${data.bottom}</div>
        </div>`;
  }, 1000);
};
let renderSet = () => {
  let content = document.querySelector(".dropdown_set");
  let html = `
  <div class="set_top">
   <a href="https://soundcloud.com/pages/contact">
   <p>About us</p>
   </a>
   <a href="https://soundcloud.com/terms-of-use">
   <p>Legal</p>
   </a>
   <a href="https://soundcloud.com/pages/copyright">
   <p>Copyright</p>
   </a>
   <a href="/Home/profile.html">
   <p>Profile</p>
   </a>
   </div>
   <div class="set_bottom">
   <a href="../Form/Welcome.html">
   <p>Create new account</p></a>
   <a id="out">
   <p>Sign out</p></a>
   </div>`;
  content.innerHTML = html;

  document.getElementById('out').onclick = () => {
    location.assign('../Form/Welcome.html')
    localStorage.clear()
  }
};

// out.addEventListener('click', () =
document.querySelector(".repeat").addEventListener("click", function(){
  document.querySelector(".repeat").style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iI2Y1MCIgZD0iTTExLjAyNyAxNmE0LjU1IDQuNTUgMCAwIDAgLjIzIDJIOUE2IDYgMCAxIDEgOSA2aDNWNGw0IDMtNCAzVjhIOWE0IDQgMCAxIDAgMCA4aDIuMDI3em03LjcyNS0yLjYxYTMuOTk3IDMuOTk3IDAgMCAwLTEuNjQ4LTQuNzkybDEuNzctMS4xOC4wMi4wMTdBNS45ODcgNS45ODcgMCAwIDEgMjEgMTJjMCAxLjMtLjQxMyAyLjUwMy0xLjExNiAzLjQ4NmE0LjQ5NiA0LjQ5NiAwIDAgMC0xLjEzMi0yLjA5NnoiLz48cGF0aCBmaWxsPSIjZjUwIiBkPSJNMTUuNSAyMGEzLjUgMy41IDAgMSAxIDAtNyAzLjUgMy41IDAgMCAxIDAgN3ptLS41LTV2NGgxdi00aC0xem0tMSAwdjFoMXYtMWgtMXoiLz48L3N2Zz4K)";
})

document.querySelector("#click_volume").addEventListener("click", function(){
  document.querySelector(".volume_dropdown").classList.toggle("active")
  if(document.querySelector(".volume_dropdown").classList == "volume_dropdown active"){
    document.querySelector("#click_volume").style.color = "#f50"
  }if(document.querySelector(".volume_dropdown").classList == "volume_dropdown"){
    document.querySelector("#click_volume").style.color = "#333"
  }
  
})

document.querySelector('div.user_ava').style.backgroundImage = `url('${JSON.parse(localStorage.getItem('user_ava'))}')`
document.querySelector('div.user_name').innerHTML = `${JSON.parse(localStorage.getItem('user_name'))}`