document.querySelector(
  "div.user_ava"
).style.backgroundImage = `url('${JSON.parse(
  localStorage.getItem("user_ava")
)}')`;
document.querySelector("div.user_name").innerHTML = `${JSON.parse(
  localStorage.getItem("user_name")
)}`;

const likeSong = JSON.parse(localStorage.getItem("Like_songs"));
console.log(likeSong);
for (let i = likeSong.length - 1;i >= likeSong.length - 7;i--
) {
  let list = document.querySelector("div.list");

  html = `<div class="ds">
  <img src="${likeSong[i].img}" alt="">
    <h2 class="ten">${likeSong[i].name}</h2>
    </div>
    `;

    list.innerHTML += html;
}
