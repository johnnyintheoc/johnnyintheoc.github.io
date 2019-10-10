$(function() {
    $('#footer-block').load('https://johnnyintheoc.github.io/footer.html');
    
    $('#header-block').load('https://johnnyintheoc.github.io/header.html');

    $('.burger-menu ul').mouseup(function(e) {
        $('.side-nav').addClass('active');
    });

    $(document).mouseup(function(e) {
        var container = $('.side-nav');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.side-nav').removeClass('active');
        }
    });
});