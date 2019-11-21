$(function() {
    $(".nav-link").on('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            var hash = this.hash;

            if (hash == "#contactAnchor") {
                $('#txt-view-email').html('johnnyoc@gmail.com');
            }

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    
    $('.btn-view-email').on('click', function(e) {
        e.preventDefault();
        $('#txt-view-email').html('johnnyoc@gmail.com');
    });

    $('#portfolioVideoModal').on('show.bs.modal', function (e) {
        $('#portfolioVideoModal .modal-body').html('<video controls autoplay><source src="./img/portfolio-intro-480p.mov" type="video/mp4">Your browser does not support the video tag.</video>');
    });

    $('#portfolioVideoModal').on('hide.bs.modal', function (e) {
        $('#portfolioVideoModal .modal-body').html('');
    });
});
