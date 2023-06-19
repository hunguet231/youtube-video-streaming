document.addEventListener('DOMContentLoaded', () => {
    const source = './manifest.mpd';
    const dash = dashjs.MediaPlayer().create();
    const video = document.querySelector('#videoPlayer');
    dash.initialize(video, source, true);

    const player = new Plyr(video, {
      blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
      autoplay: false,
      seekTime: 10,
    });

    window.player = player;
    window.dash = dash;

    player.on('ready', event => {
      console.log('ready');
    });

    player.on('ended', event => {
      console.log('end');
    });
});
