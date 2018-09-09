$('#share-link').on('click',
  () => {
    $('#share-panel').toggleClass('hidden');
  }
);

$(
  () => {
  let aud = $('audio')[0];
  $('#play-pause').on('click',  () => {
    if (aud.paused) {
      aud.play();
      $('#play-pause').removeClass('fa-play-circle');
      $('#play-pause').addClass('fa-pause-circle');
    }
    else {
      aud.pause();
      $('#play-pause').removeClass('fa-pause-circle');
      $('#play-pause').addClass('fa-play-circle');
    }
  
})
  aud.ontimeupdate = () => {
    $('.progress').css('width', aud.currentTime / aud.duration * 100 + '%')
  }
})