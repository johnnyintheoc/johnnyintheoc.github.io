$(function() {
    $('#footer-block').load('https://johnnyintheoc.github.io/footer.html');
    $('#header-block').load('https://johnnyintheoc.github.io/header.html');

    $('.play-portfolio').bind('click', function(e) {
        e.preventDefault();
        $('section').addClass('no-opacity');
        $('#portfolio-vid').html('<video controls autoplay><source src="img/portfolio-intro-480p.mov" type="video/mp4">Your browser does not support the video tag.</video>');
    });

    $('.grid img').bind('click', function(e) {
        e.preventDefault();
        const img = document.createElement('img');
        img.src = this.src;
        $('#lightbox img:last-child').remove();
        $('#lightbox').append(img);
        $('#lightbox').addClass('active');
    });

    $('#lightbox').bind('click', function(e) {
        closeLightbox(e);
    });

    $('.close').bind('click', function(e) {
        e.preventDefault();
        closeLightbox(e);
    });

    $('input[name=iphone-submit]').bind('click', function(e) {
        getIphoneTxt();
    });

    $('input[name=iphone-txt]').on('keypress', function(e) {
        if (e.which == 13) {
            getIphoneTxt();
        }
    });

    function getIphoneTxt() {
        const dte = new Date();
        const msg = $('input[name=iphone-txt]').val();
        if (msg != '') {
            const txt = '<span class="iphone-txt-bubble">' + msg + '</span> <span class="iphone-date">' + dte.toLocaleString() + '</span><br /><br />';
            $('.iphone-output').append(txt);
            $('.iphone-txt-bubble').fadeIn('slow');
            $('input[name=iphone-txt]').val('');
        }
    }

    function closeLightbox(e) {
        if (e.target !== e.currentTarget) return;
        $('#lightbox').removeClass('active');
    }
});