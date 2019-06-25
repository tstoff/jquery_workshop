jQuery(function(){
    var artistImage = jQuery('.artistImage'), // <-- best practice to never use a selector twice!
        artistText  = jQuery('.artistText');  //


    artistImage.fadeTo(1000, 0.5); //    <-- ANIMATED OPACITY
    // artistImage.css('opacity', 0.5);  <-- INSTANT OPACITY

    artistText.hide().addClass('hidden'); // hide the Text Field and add class to it <-- Chaining


    artistImage.on('mouseover', function(){
        jQuery(this).fadeTo(200, 1.0);
    });

    artistImage.on('mouseleave', function(){
        jQuery(this).fadeTo(200, 0.5);
    });

    artistImage.on('click', function(){
        artistText.show();
        artistText.removeClass('hidden');
    });
});