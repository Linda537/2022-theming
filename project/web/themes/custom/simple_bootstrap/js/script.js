(function ($,Drupal, once){
    'use strict';
    Drupal.behaviors.helloTu = {
        attach: function (context, settings){
            once('helloTu', 'html', context).forEach(function (element){
                alert("hello Tu");    
            });
            
        }
    }
})(jQuery, Drupal, once);