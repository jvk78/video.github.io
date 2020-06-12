const playVideo = document.getElementById('play__video');
const scrWraper = document.getElementById('scr__wrapper');
const mapWraper = document.getElementById('map__wrapper');
const openMap = document.getElementById('open__map');
const openMapSm = document.getElementById('open__map-small');


var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
//        'onStateChange': onPlayerStateChange
      }
    });
  }

function onPlayerReady(event) {
  
playVideo.addEventListener('click', function() {
  playVideo.style.opacity = '0';
      setTimeout(function(){playVideo.style.display = 'none'}, 500);
      event.target.playVideo();
  } ) 
}


var map;

function createMap() {
DG.then(function () {
  map = DG.map('map', {
    center: [43.25806, 76.94946],
    fullscreenControl: false,
    zoom: 15
  });
  myIcon = DG.icon({
    iconUrl: 'assets/img/mareven_checkin.png',
    iconSize: [35, 35]
  });
  DG.marker([43.25806, 76.94946], {
    icon: myIcon}).addTo(map)
    .bindLabel('Маревен Фуд Тянь-Шань', {
    
  })
    .bindPopup('<b>Маревен Фуд Тянь-Шань</b><br>050000,&nbsp;Республика&nbsp;Казахстан, г.&nbsp;Алматы,&nbsp;ул.&nbsp;Кунаева,&nbsp;д.77,<br>Бизнес&nbsp;центр&nbsp;«Parkview&nbsp;Office&nbsp;Tower», 6&nbsp;этаж,&nbsp;офис&nbsp;№13<br>+7&nbsp;(727)&nbsp;321-11-19')
  });
}

function showMap(btn) {
  btn.onclick = function() {
    mapWraper.innerHTML = '<div class="map" id="map"><div class="cls__btn" id="cls__btn"></div></div>';
    createMap();
    mapWraper.style.transform = 'scale(1)';
    mapWraper.style.opacity = '1';
    document.getElementById('cls__btn').onclick = function() {
      mapWraper.style.transform = 'scale(0)';
      mapWraper.style.opacity = '0';
      setTimeout(function(){
      mapWraper.innerHTML = '';
      }, 500)
    }
  }
} 

showMap(openMap);
showMap(openMapSm);