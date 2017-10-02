'use strict'

$(document).ready(function() {

    $('.click-to-comment').click(function() {
        jQuery(document).find('.block-to-write-your-comment').toggle();
        jQuery(document).find('.click-to-comment').toggle();
    });
    
    $('.line').click(function() {
        //$(this).hide().removeClass('active');
        $(this).find('.minus').toggleClass('active');
        $(this).find('.plus').toggleClass('active');
        $(this).find('.message-block').slideToggle();
    });

    var link = $('.menu-link'),
        menu = $('.wrap-menu');


    link.click(function() {
        $(this).toggleClass('menu-link--active');
        menu.toggleClass('wrap-menu--open');
        $('body').toggleClass('overflow-hidden');
    });
    
});