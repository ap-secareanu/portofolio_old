$(document).ready(function() {
    
    // Heading Dot animation
    const showDot = () => {
        $('.heading_dot').removeClass('hide')
        $('.heading_dot').addClass('show');
    };
    const hideDot = () => {
        $('.heading_dot').addClass('hide');
        $('.heading_dot').removeClass('show')
    }

    setInterval(hideDot, 500);
    setInterval(showDot, 1000);
    // Heading Dot animation


    // About Section animations

    $('.img_container').hover(function() {
        $('.img_container .profile_pic').addClass('move_negative');
    }, function() {
        $('.img_container .profile_pic').removeClass('move_negative');
    })


})