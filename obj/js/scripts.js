jQuery(function(){
    // jQuery('.artistImage').fadeTo(1000, 0.5); //    <-- ANIMATED OPACITY
    jQuery('.artistImage').css('opacity', 0.5);  //    <-- INSTANT OPACITY

    jQuery('.artistText').hide().addClass('hidden'); // hide the Text Field and add class to it <-- Chaining  
});