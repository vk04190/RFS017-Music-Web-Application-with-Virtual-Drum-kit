var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0;
var songNumber=1; //initial song number


// Array of objects for storing the Song details
            var songs = [
              // ----------------------------------New Songs Added---------------------------------
              {
                  'name': 'Alla Hafiz',
                  'artist': 'Niraj Shreedhar',
                  'album': 'Bhool Bhulaiyaa',
                  'duration': '04:33',
                  'fileName': 'Audio/Alla Hafiz.mp3',
                  'image': 'Bhool Bhulaiyaa.jpg'
              },
              {
                    'name': 'Badri Ki Dulhania (Title Track)',
                    'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
                    'album': 'Badrinath ki Dulhania',
                    'duration': '2:56',
                   'fileName': 'Audio/song1.mp3',
                   'image': 'song1.jpg'
                },
                {
                    'name': 'Humma Song',
                    'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
                    'album': 'Ok Jaanu',
                    'duration': '3:15',
                    'fileName': 'Audio/song2.mp3',
                    'image': 'song2.jpg'
                },
                {
                    'name': 'Nashe Si Chadh Gayi',
                    'artist': 'Arijit Singh',
                    'album': 'Befikre',
                    'duration': '2:34',
                    'fileName': 'Audio/song3.mp3',
                    'image': 'song3.jpg'
                },
                {
                    'name': 'The Breakup Song',
                    'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
                    'album': 'Ae Dil Hai Mushkil',
                    'duration': '2:29',
                    'fileName': 'Audio/song4.mp3',
                    'image': 'song4.jpg'
                }];


                // javascript function for converting a bulks seconds into a standandard time format
                //here 'time' is a formal parameter which is passed(takes values) by the calling function like 'currentTime' and 'duration'
                            function fancyTimeFormat(time)
                            {
                                                          // Hours, minutes and seconds
                                                            //here second converting into hours like time=47000sec is 47000sec/(60*60)=1hrs and 1100sec that will be like time/3600
                                                          var hrs = ~~(time / 3600);
                                                          //and the left second are converted into minutes like 1100sec/60=18minutes and 20sec that will be (time%3600)/60=total minutea+left seconds
                                                          var mins = ~~((time % 3600) / 60);
                                                          //and the left Seconds now devided by 60 if not possible make it remenders like 20/60 not devisible so remaining seconds are 20 sec
                                                          var secs = time % 60;
                                                          //so the answer is 47000sec=1hrs 18 minutes and 20 seconds in following format
                                                          // Output like "1:01" or "4:03:59" or "123:03:59"
                                                          var ret = "";           //here creates a local variable  string with blank

                                                          if (hrs > 0) {          //condition check if hours values is greater then 0 then go for next
                                                              ret += "" + hrs + ":" + (mins < 10 ? "0" : "");  //if hour value is greater it shows time in this formate like 01: 18 : 20
                                                          }

                                                          ret += "" + mins + ":" + (secs < 10 ? "0" : "");       //or if not hours  it shows like this one 18 : 20
                                                          ret += "" + secs;      //if only seconds are presented in time variable the it will shows like 20
                                                          return ret;           //after that it will return the value to the function from local variable ret to the storge variable
                                                      }

$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if(name.length >2){
    var message = "Welcome, " + name;
    $('.main .user-name').text(message);
    $('.welcome-screen').addClass('hidden');
    $('.main').removeClass('hidden');
  }
  else{
    $('#name-input').addClass('error');
    $('.warning').removeClass('hidden');
  }
});



//fuction for Audio Play and Pause
function toggleSong(){
      var song = document.querySelector('audio');
      // it check wheather the Song status paused or not if paused it plays if not it paly
      if(song.paused == true) {
        // code For paly The Song
        console.log('paying the Music');
        $('.play-icon').removeClass('fa-play').addClass('fa-pause');
        song.play();
      }
      else{
        // code for pause the song
        console.log('pausing the Music');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();
      }
    }


// Song Play And Pause Button working

// code for calling the function when .play-icon class button is press
$('.play-icon').on('click',function(event){
  toggleSong();
});

//code for Calling the function when the spacebar(32) is prassed from keyboard
$('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});

  //function for changing current song details when ever songs chnages
              function changeCurrentSongDetails(songobj){
                $('.current-song-image').attr('src', 'img/' + songobj.image); //code forusing jQuery to select the element with class 'current-song-image' and dynamically adding images in the somgs plalyed
                $('.current-song-name').text(songobj.name);
                $('.current-song-album').text(songobj.album);
              }

// function for current time and duration calculation of songs
              function updateCurrentTime(){
                      var song = document.querySelector('audio');
                    // console.log(song.currentTime);
                    // console.log(song.duration);
                      var currentTime = Math.floor(song.currentTime);
                      //it sends the value to the from currenttime to 'time' and after that get value from ret to CurrentTime
                      currentTime = fancyTimeFormat(currentTime);
                      var duration = Math.floor(song.duration);
                      //it sends the value to the from duration to 'time' and after that get value from ret to duration
                      duration = fancyTimeFormat(duration);
                      $('.time-elapsed').text(currentTime);
                      $('.song-duration').text(duration);
                  }


      // new Smart Function For Doing all songs playing on click by it self
            function addSongNameClickEvent(songObj,position) {
                var songName = songObj.fileName;
                var id = '#song' + position;
                $(id).click(function() {
                  var audio = document.querySelector('audio');
                  var currentSong = audio.src;
                if(songNumber != position) //check for string are match or not with old played song
                  {
                    audio.src = songName;
                    songNumber = position;
                    changeCurrentSongDetails(songObj);
                  }
                    toggleSong();
                  });
            }
// code for looping song
$('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});

//code for suffale songs$('.fa-random').on('click',function() {
$('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});



// // code for jump the song and text go for next
// function timeJump() {
//     var song = document.querySelector('audio')
//     song.currentTime = song.duration - 5;
// }



// play for next song when 1 song ended
$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if (willShuffle == 1) {
        var nextSongNumber = randomExcluded(1,5,currentSongNumber); // Calling our function from Stackoverflow
        var nextSongObj = songs[nextSongNumber-1];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = nextSongNumber;
    }
    else if(currentSongNumber < 5) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber = currentSongNumber + 1;
    }
    else if(willLoop == 1) {
        var nextSongObj = songs[0];
        audio.src = nextSongObj.fileName;
        toggleSong();
        changeCurrentSongDetails(nextSongObj);
        currentSongNumber =  1;
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})

//whenever the html document is loaded , only after that , run this function
            window.onload = function() {
                changeCurrentSongDetails(songs[0]);
                updateCurrentTime();
                setInterval(function() {
                    updateCurrentTime();
                    updateTimer();
                  },1000);

//fetch from database - ajax ,backend , Server
                      for(var i =0; i < songs.length; i++) {
                          var obj = songs[i];
                          var name = '#song' + (i+1);
                          var song = $(name);
                          song.find('.song-name').text(obj.name);
                          song.find('.song-artist').text(obj.artist);
                          song.find('.song-album').text(obj.album);
                          song.find('.song-length').text(obj.duration);
                          addSongNameClickEvent(obj,i+1); //function call by passing object value and position information
                      }
                  $('#songs').DataTable({
                    paging: false    //code forhiding page number from the tables
                  }); //code for initializing data table on our table
                  }


// -------------------------------------------------------------------------------

                  // function for play next song on click next button
                  $('.next-icon').on('click',function() {
                    var audio = document.querySelector('audio');
                    if(currentSongNumber < songs.length) {    //check for next song it must be less
                      var next = songs[currentSongNumber];
                      audio.src = next.fileName;
                      toggleSong();
                      changeCurrentSongDetails(next);
                      currentSongNumber = currentSongNumber + 1;  //it will increases the song numbers

                    }
                  else{
                  currentSongNumber = 0; //if currentsong equal songs.length it go for first song
                  }
                  })

                  // function for playing previous song
                  $('.back-icon').on('click',function() {
                    var audio = document.querySelector('audio');
                    if(currentSongNumber > 0 && currentSongNumber < songs.length) { //current song must be greater the 0 and also be less then total length
                      var back = songs[currentSongNumber - 1];
                      audio.src = back.fileName;
                      toggleSong();
                      changeCurrentSongDetails(back);
                      currentSongNumber = currentSongNumber - 1;          //so it will decrease the song numbers

                    }
                  })

                  //code for showing the progress of song played
                  function updateTimer(){
                    var song = document.querySelector('audio');
                    var current = song.currentTime;
                    var total = song.duration;
                    var percentage = (current/total)*100;   //cullculatin for curreret percentege
                    $('.progress-filled').css('width',percentage+"%");    //by using css width property it show the duration of song played
                    }


                  // code for click on progress bar to increase and decrease song time
                  $('.player-progress').click(function(event){
                    var $this = $(this);
                    var MouseLeft = event.pageX - $this.offset().left; // to detact the mouse pointer click on left of progress bar
                    var TotalWidth = $this.width();
                    var progress = (MouseLeft / TotalWidth) * 100;
                    var song = document.querySelector('audio');
                    song.currentTime = (song.duration*progress)/100;
                  });
