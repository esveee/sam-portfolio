$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat Sam.human<br/>" +
      "><span class='caret'>$</span> skills: Machine Learning, Computer vision, Web Development, iOS, Software Development, Data Science, 3D <br/> ^100" +
      "><span class='caret'>$</span> job: ex intern @ <a href='http://www.rocscience.com/'>Rocscience, <a href='https://www.ibm.com/watson'>IBM Watson,<a href='https://advisory.kpmg.us/services/lighthouse.html'> KPMG </a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: Weightlifting, Reading, Tennis, Theatre, YouTube, Anime, Ping Pong <br/> ^300" +
      "><span class='caret'>$</span> alias: esveee <br/>" /*
      "><span class='caret'>$</span> highlight:  <a href='/projects/video-stab'>real time image stabilization on Android</a>, <a href='/projects/lifehacks'>app with >750K installs</a><br/>"
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"*/
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.002,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
