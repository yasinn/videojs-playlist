            // initialize video.js
            
//note in the data-src's above that there are no file extensions, e.g., .m4v
videojs("#video-playlist", {"height":"auto", "width":"auto"}).ready(function(event){
    var myPlayer=this;
    myPlayer.playlist({
        'continuous': false
    });

    function resizeVideoJS(){
      var width = document.getElementById(myPlayer.L).parentElement.offsetWidth;
      var aspectRatio=8/12;
      myPlayer.width(width).height( width * aspectRatio); 
    }

    resizeVideoJS(); // Initialize the function
    window.onresize = resizeVideoJS; // Call the function on resize   
});

videojs("#audio-playlist", {"height":"auto", "width":"auto","customControlsOnMobile": true}).ready(function(event){
    var myPlayer=this;

    myPlayer.playlist({
    'mediaType': 'audio',
    'continuous': true,
    'setTrack': 2
    });
    myPlayer.on('playing', function(){
        var poster=document.getElementsByClassName("vjs-poster")[1];
        console.log(poster);
        poster.style.display="block";

    }); 

    function resizeVideoJS(){
      var width = document.getElementById(myPlayer.L).parentElement.offsetWidth;
      var aspectRatio=8/12;
      myPlayer.width(width).height( width * aspectRatio); 
    }

    resizeVideoJS(); // Initialize the function
    window.onresize = resizeVideoJS; // Call the function on resize

});


