const playVideo = document.getElementById('play__video');


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
