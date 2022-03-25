
let user_content = document.querySelector(".user_content");

let data_user = [
    {
        ava:"https://i1.sndcdn.com/avatars-000510724806-2fk9up-t50x50.jpg",
        name:"KHA",
        follower:"57.6K",
        tracks:"63"
    },
    {
        ava:"https://i1.sndcdn.com/artworks-000165188362-2gl7ca-t120x120.jpg",
        name:"ngtanh",
        follower:"153",
        tracks:"32"
    },
    {
        ava:"https://i1.sndcdn.com/artworks-000420422922-hvq7wt-t120x120.jpg",
        name:"Hawys",
        follower:"8,956",
        tracks:"37"
    },
]


let user_1 = document.querySelector(".user_1");
let user_2 = document.querySelector(".user_2");
let user_3 = document.querySelector(".user_3");


for (let i = 0; i < data_user.length; i++) {
  let html_user_content = `
  <div class="user_ava">
  <img src="${data_user[i].ava}" alt="">
  </div>
  <div class="user_info">
      <p>${data_user[i].name}</p>
      <div class="status_user">
          <p>${data_user[i].follower}</p>
          <p>${data_user[i].tracks}</p>
          <button class="btn_follow">Follow</button>
      </div>
  </div>`;

  switch (i +1) {
      case 1:
        user_1.innerHTML = html_user_content
          break;
     case 2:
         user_2.innerHTML = html_user_content
         break;
    case 3:
        user_3.innerHTML = html_user_content
        break;
   
  }

};

let data_user_song = JSON.parse(localStorage.getItem('History'))



let artist_song = document.querySelector(".song_sidebar");

for (let i = JSON.parse(localStorage.getItem('History')).length - 1; i >=(JSON.parse(localStorage.getItem('History')).length -3); i--) {
    


    let html_artist_song = `
    <div class="song_row">
    <img id='play_history' style="width:50px" src="${(JSON.parse(localStorage.getItem('History')))[i].img}" alt="">
                            <div class="title">
                                <p>${JSON.parse(localStorage.getItem('History'))[i].title}</p>
                                <h2>${JSON.parse(localStorage.getItem('History'))[i].name}</h2>
                                <div class="about_song">
                                    <p><span class="material-icons">
                                            play_arrow
                                        </span> ${JSON.parse(localStorage.getItem('History'))[i].play}</p>
                                    <p><span class="material-icons">
                                            favorite
                                        </span> ${JSON.parse(localStorage.getItem('History'))[i].favourites}</p>
                                    <p><span class="material-icons">
                                            repeat
                                        </span> ${JSON.parse(localStorage.getItem('History'))[i].repeat}</p>
                                    <p></span><span class="material-icons">
                                            chat_bubble
                                        </span>  ${JSON.parse(localStorage.getItem('History'))[i].comments}</p>
                                </div>
                            </div>
                            </div>`;
    artist_song.innerHTML += html_artist_song




//     let play = document.querySelector(".play_history")

//     play.addEventListener("click", () => {
//         console.log(`${data_user_song[i].audio}`);
//     })
}
