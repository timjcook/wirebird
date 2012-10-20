// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function () {
  // $(document).scrollTop('#home', 0)
  $('#wrapper').scrollTo('#home', 0)
  resizePanel();
  
  function resizePanel() {
 
    //get the browser width and height
    width = $(window).width();
    height = $(window).height();
 
    //get the mask width: width * total of items
    mask_width = width * $('.page').length;
         
    //set the dimension 
    $('#wrapper, .page').css({width: width, height: height});
    $('#mask').css({width: mask_width, height: height});
     
    //if the item is displayed incorrectly, set it to the corrent pos
    // $('#wrapper').scrollTo($('a.selected').attr('href'), 0);
    $('#wrapper').scrollTo('#home', 0);
  }
  
  //resize all the items according to the new browser size
  $(window).resize(function () {
    //call the resizePanel function
    resizePanel();
  });
    
  //get all link with class panel
  $('a.panel').click(function () {
    //reset and highlight the clicked link
    $('a.panel').removeClass('selected');
    $(this).addClass('selected');
           
    //grab the current item, to be used in resize function
    current = $(this);
           
    //scroll it to the destination
    $('#wrapper').scrollTo($(this).attr('href'), 1100 , {easing:'easeInOutSine'});// EDIT 1500 TO CHANGE SCROLL SPEED      
           
    //cancel the link default behavior
    return false;
  });
});
  
