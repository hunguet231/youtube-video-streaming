const ytdl = require('ytdl-core');

ytdl.getInfo('KbIjug1Ijio').then((res) => {
  // console.log(
  //   res.formats.filter((format) => format.videoCodec && format.audioCodec)[0]
  // );
  console.log(res.player_response.streamingData);
});

// var options = {};

// var player = videojs('video-player', options, function onPlayerReady() {
//   videojs.log('Your player is ready!');

//   // In this context, `this` is the player that was created by Video.js.
//   this.play();

//   // How about an event listener?
//   this.on('ended', function () {
//     videojs.log('Awww...over so soon?!');
//   });
// });
