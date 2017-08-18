'use strict'

$(document).ready(function() {

    $('.click-to-comment').click(function() {
        jQuery(document).find('.block-to-write-your-comment').toggle();
        jQuery(document).find('.click-to-comment').toggle();
    });
    
});