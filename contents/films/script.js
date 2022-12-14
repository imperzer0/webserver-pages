$(document).ready(function () {
    // Add event listener to playlist items to play selected video
    $('.playlist a').on('click', function (e) {
        e.preventDefault();
        var videoUrl = $(this).attr('href');
        $('video').attr('src', videoUrl);
    });

    // Add event listener to video player to toggle play/pause
    $('video').on('click', function () {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });

    // Add event listener to video player to toggle full-screen mode
    $('video').on('dblclick', function () {
        if (this.requestFullscreen) {
            this.requestFullscreen();
        } else if (this.mozRequestFullScreen) {
            this.mozRequestFullScreen();
        } else if (this.webkitRequestFullscreen) {
            this.webkitRequestFullscreen();
        }
    });

    // Loop through videos in /videos directory and add them to playlist
    var videoDirectory = 'videos/';
    $.ajax({
        url: videoDirectory,
        success: function (data) {
            $(data).find('a').attr('href', function (i, val) {
                if (val.match(/\.(mp4)$/)) {
                    var videoTitle = val.replace('.mp4', '');
                    $('#video-list').append('<li><a href="' + videoDirectory + val + '">' + decodeURI(videoTitle) + '</a></li>');
                }
            });
        }
    });

    // Add delegated event listener to playlist to play selected video
    $('#video-list').on('click', 'a', function (e) {
        e.preventDefault();
        var videoUrl = $(this).attr('href');
        $('video').attr('src', videoUrl);
    });
});
