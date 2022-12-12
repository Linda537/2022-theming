(function ($,Drupal, once){
    'use strict';
    Drupal.behaviors.dark_mode = {
        attach: function (context, settings){
            once('dark_mode', 'html', context).forEach(function (element){
                $('.dark-mode').click(function(){
                    $('body').toggleClass('dark');

                    const body_element = document.querySelector ('body');
                    const button= document.querySelector ('dark-mode');
                    if (body_element.elemet.classList.contains('dark')){
                        button.innerHTML('swith to Light');
                    }
                    else (body_element.elemet.classList.contains('dark')){
                        button.innerHTML('swith to Dark');
                    };
                }); 
                  
            });
            
        }
    }
})(jQuery, Drupal, once);