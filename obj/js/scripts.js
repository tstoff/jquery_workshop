jQuery(function(){
    var artistImage = jQuery('.artistImage'), // <-- best practice to never use a selector twice!
        artistText  = jQuery('.artistText');  //
        serverResponse = {};

    jQuery.ajax({
        type: "POST",
        url: "", // url should look like: 192.0.0.1:8080/artists
    }).done(function(data){
        serverResponse = JSON.parse(data);
    }).fail(function(err){
        console.error(err);
    });

    artistImage.fadeTo(1000, 0.5); //    <-- ANIMATED OPACITY
    
    var grid = jQuery('content');

    grid.on('mouseover', '.artistImage', function(){
        jQuery(this).fadeTo(200, 1.0);
    });

    grid.on('mouseleave', '.artistImage', function(){
        jQuery(this).fadeTo(200, 0.5);
    });

    grid.on('click', '.artistImage', function(){
        var artistId = jQuery(this).attr('data-artist');
        artistText.find('.artistHeadline').html(serverResponse.artists[artistId].name);
        artistText.find('.artistDescription').html(serverResponse.artists[artistId].text);
        artistText.show();
    });
});