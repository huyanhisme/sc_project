const infoSongs_history = JSON.parse(localStorage.getItem("History"));

document.querySelector('div.user_ava').style.backgroundImage = `url('${JSON.parse(localStorage.getItem('user_ava'))}')`
document.querySelector('div.user_name').innerHTML = `${JSON.parse(localStorage.getItem('user_name'))}`

console.log(infoSongs_history);
for (let i = infoSongs_history.length - 1; i >=(infoSongs_history.length-7 ); i--)  {
  let playlist = document.querySelector(".playlist");

  html = `<div class='row'>
  <img class="play_music"
        src="${infoSongs_history[i].img}" alt="">
    <div class="pl">
        <div class="ds">
            <audio
            class="audio" id="main_audio" src="${infoSongs_history[i].audio}><i
             id="play" class="fa fa-play"></i></audio>
            <div class="c">
            <p class="ten">${JSON.parse(localStorage.getItem('History'))[i].title}</p>
            <a
                href="https://soundcloud.com/ho-ng-tr-n-95017160/chi-muon-ben-em-luc-nay-jiki-x-ft-huy-vac-lofi-version">
                <h4>${JSON.parse(localStorage.getItem('History'))[i].name}</h4>
            </a>
            </div>
        </div>
        <div class="ds">
            <button><i id="active" class="fa fa-heart"></i> ${JSON.parse(localStorage.getItem('History'))[i].favourites}</button>
            <button><i class="fa fa-retweet"></i> ${JSON.parse(localStorage.getItem('History'))[i].repeat}</button>
            <button><i class="fas fa-share-square"></i> Share</button>
            <a style="margin: 50px 0px 10px 200px;color:rgb(173, 173, 173) ;"
            href="https://soundcloud.com/ho-ng-tr-n-95017160/chi-muon-ben-em-luc-nay-jiki-x-ft-huy-vac-lofi-version"><i
                class="fa fa-play"></i>${JSON.parse(localStorage.getItem('History'))[i].play}</a>
            <p style="margin: 40px 0px 10px 10px;color:rgb(173, 173, 173) ;"><i class="fa fa-comment">
            </i>${JSON.parse(localStorage.getItem('History'))[i].comments}</p>
        </div>
     </div>
  </div>
        
    </div>`;

    playlist.innerHTML += html

}   

