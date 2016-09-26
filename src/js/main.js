import $ from 'jquery';
import jQuery from 'jquery';
import bootstrap from 'bootstrap-sass';

$( document ).ready(function() {
    console.log( "ready! to code your challenge :) beenverified.com team" );

    //Animation for navigatiopn icon
    $('.nav-icon').on('click', function(e) {
         $(this).toggleClass('active');
    });

    //Animation for moving to section

    // Function to check if section exists
    function isSection(section){
        if($('section'+section).length > 0){
            return true;
        }
        else{
            return false;
        }
    }

    // Scroll function
    function scrollToSection(section){
        var offset = $(section).offset().top;
        $('html, body').stop().animate({
            scrollTop: offset
        }, 600, function(){
           window.location.hash = section;
        });
    }

    // The Click() function
    $('header a').click(function(event){
        event.preventDefault();
        var section = $(this).attr('href');
        if(isSection(section)){
            scrollToSection(section);
        }
        return false;
    })
});
