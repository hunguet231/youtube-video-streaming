const ytdl = require('ytdl-core');
const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

ytdl.getInfo('KbIjug1Ijio').then((res) => {
  console.log(
    res.formats.filter((format) => format.videoCodec && format.audioCodec)[0]
  );
  const dashManifestUrl = res.player_response.streamingData.dashManifestUrl;
  // console.log(dashManifestUrl);
  const file = fs.createWriteStream('manifest.mpd');
  https.get(dashManifestUrl, function (response) {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download Completed');
    });
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const player = videojs('videoPlayer', {
//     plugins: {
//       settingsMenu: {
//         items: [
//           'AudioTrackButton',
//           'PlaybackRateMenuButton',
//           'RatesButton',
//         ],
//         languages: {
//           settings: 'Settings',
//           loading: 'Loading',
//           back: 'Back',
//           audio: 'Audio',
//           speed: 'Speed',
//           quality: 'Quality',
//         },
//       },
//     },
//     crossOrigin: 'anonymous',
//     liveui: true,
//     autoplay: true,
//     playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
//     nativeControlsForTouch: false,
//   });

//   player.ready(function () {
//     player.src({
//       src: './manifest.mpd',
//       type: 'application/dash+xml',
//     });
//   });
// });
