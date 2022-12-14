$(document).ready(function () {
    // Loop through directories in contents/ directory and add them to playlist
    var directory = 'contents/';
    $.ajax({
        url: directory,
        success: function (data) {
            $(data).find('a').attr('href', function (i, val) {
                if (val.endsWith('/') && val.length > 1) {
                    var title = val.substring(0, val.length - 1);
                    $('#pages-list').append('<li><a href="' + directory + val + '">' + decodeURI(title) + '</a></li>');
                }
            });
        }
    });
});