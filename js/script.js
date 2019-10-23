$(function() {
    $('#footer-block').load('https://johnnyintheoc.github.io/footer.html');
    $('#header-block').load('https://johnnyintheoc.github.io/header.html');

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
            const txt = '<p><span class="iphone-txt-bubble">' + msg + '</span> <span class="iphone-date">' + dte.toLocaleString() + '</span></p>';
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