(function ($,Drupal, once){
    'use strict';
    Drupal.behaviors.dark_mode = {
        attach: function (context, settings){
            once('dark_mode', 'html', context).forEach(function (element){
                alert("hello Tu");    
            });
            
        }
    }
})(jQuery, Drupal, once);