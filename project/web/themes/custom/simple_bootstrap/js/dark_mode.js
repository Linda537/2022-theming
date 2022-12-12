(function ($,Drupal, once){
    'use strict';
    Drupal.behaviors.dark_mode = {
        attach: function (context, settings){
            once('dark_mode', 'html', context).forEach(function (element){
                $('.dark-mode').click(function(){
                    $('body').toggleClass('dark');

                });   
            });
            
        }
    }
})(jQuery, Drupal, once);