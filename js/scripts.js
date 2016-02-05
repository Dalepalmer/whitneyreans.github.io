$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['personalspace', 'listings', 'about'],
        menu: '#nav-menu',
        // sectionSelector: '.page',
        // scrollOverflow: true,
        easing: 'easeInExpo',
        css3: true,
        scrollingSpeed: 555,
        navigation: true,

    });
});