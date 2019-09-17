jQuery(function(){
    var artistImage = jQuery('.artistImage'), // <-- best practice to never use a selector twice!
        artistText  = jQuery('.artistText');  //


    artistImage.fadeTo(1000, 0.5); //    <-- ANIMATED OPACITY
    // artistImage.css('opacity', 0.5);  <-- INSTANT OPACITY

    // SIMPLE SOLUTION \/ \/ \/
    // artistImage.on('mouseover', function(){
    //     jQuery(this).fadeTo(200, 1.0);
    // });

    // artistImage.on('mouseleave', function(){
    //     jQuery(this).fadeTo(200, 0.5);
    // });

    // artistImage.on('click', function(){
    //     artistText.show();
    //     artistText.removeClass('hidden');
    // });

    // BEST PRACTICE SOLUTION \/ \/ \/
    var grid = jQuery('content');

    grid.on('mouseover', '.artistImage', function(){
        jQuery(this).fadeTo(200, 1.0);
    });

    grid.on('mouseleave', '.artistImage', function(){
        jQuery(this).fadeTo(200, 0.5);
    });

    grid.on('click', '.artistImage', function(){
        artistImage.removeClass('highlight');
        jQuery(this).addClass('highlight');
        artistText.show();
    });
});