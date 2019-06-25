jQuery(function(){
    var artistImage = jQuery('.artistImage'), // <-- best practice to never use a selector twice!
        artistText  = jQuery('.artistText');  //
    var backendMock = {
            "artists": [
                {
                    "name": "As I Lay Dying",
                    "text": "As I Lay Dying (oft abgekürzt AILD) ist eine US-amerikanische Metalcore-Band, die 2001 von x-Society's Finest-Gitarrist Tim Lambesis gegründet wurde. Der Name der Band ist der englische Originaltitel des Romans Als ich im Sterben lag von William Faulkner. Allerdings ist dies purer Zufall, denn zum Zeitpunkt der Namenswahl kannte keines der Mitglieder auch nur den Namen davon."
                },
                {
                    "name": "Meshuggah",
                    "text": "Meshuggah was formed In 1987 In Umeå, Sweden. I do not know anythIng about the personnel of that tIme, but guItarIst FredrIk Thordendal, bassIst Peter NordIn and vocalIst Jens KIdman all played on theIr debut EP of 1989. At that tIme, Jens KIdman played the guItar as well. Umeå has a healthy scene, and a lot of people are Involved In rock musIc. AccordIng to Jens KIdman there are a lot of good bands from Umeå, probably because there Is not a lot to do. The fact that there Is a unIversIty In Umeå mIght also strengthen the rock scene. A lot of people play In bands, but few of these are known outsIde the town. The majorIty of the musIcIans wantIng to get anywhere wIth theIr musIc leave town. Many of the sessIon musIcIans In Stockholm are from Umeå, accordIng to Mårten Hagström. "
                },
                {
                    "name": "Of Mice and Men",
                    "text": "Ausgerechnet Pop-Queen Lady Gaga war dazu bestimmt, der Metalcore-Band aus Costa Mesa, Kalifornien zu deren erstem Platten-Deal zu verhelfen. So geschehen anno 2009, als der Amerikaner Austin Carlile (zuvor bei Attack Attack!) und der Neuseeländer Jaxin Hall eine veritable Metal-Version des Gaga-Hits \"Poker Face\" aufnahmen. mit dabei: Valentino Arteaga (Schlagzeug), Jonathan Kintz(E-Gitarre) und Phil Manansala (E-Gitarre)."
                },
                {
                    "name": "Reload Festival",
                    "text": "Das Reload Festival ist ein seit 2006 alljährlich in den Sommermonaten an zwei, zwischen 2009 und 2013 an drei Tagen in Niedersachsenstattfindendes Freiluft-Rockfestival, das zunächst (wie eine schon 2003 durchgeführte Indoor-Vorgängerveranstaltung) in Twistringen abgehalten wurde, seit 2011 dann in Sulingen. Als führende Teilnehmer in vergangenen Jahren werden etwa Billy Idol (2010), Limp Bizkit, Hatebreed oder Papa Roach (2011) genannt. "
                }
            ]
        };

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
        artistText.find('.artistHeadline').html(backendMock.artists[artistId].name);
        artistText.find('.artistDescription').html(backendMock.artists[artistId].text);
        artistText.show();
    });
});