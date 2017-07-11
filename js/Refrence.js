// $('audio').on('ended',function() {
//     var audio = document.querySelector('audio');
//     if(currentSongNumber < 4) {
//         var nextSongObj = songs[currentSongNumber];
//         audio.src = nextSongObj.fileName;
//         toggleSong();
//         changeCurrentSongDetails(nextSongObj);
//         currentSongNumber = currentSongNumber + 1;
//     }
//     else if(willLoop == 1) {
//         var nextSongObj = songs[0];
//         audio.src = nextSongObj.fileName;
//         toggleSong();
//         changeCurrentSongDetails(nextSongObj);
//         currentSongNumber =  1;
//     }
//     else {
//         $('.play-icon').removeClass('fa-pause').addClass('fa-play');
//         audio.currentTime = 0;
//     }
// })



// //Code for auto song Scan from file by its name
//         //Array of Songs file scann form current Directory
//             var fileNames = [
//                                   'song1.mp3',    //[0] of fileNames that is fileNames[0];
//                                   'song2.mp3',
//                                   'song3.mp3',
//                                   'song4.mp3'
//                                 ];





//
//       //refrence code 1.0,2.0  code for calling of function addSongNameClickEvent by using automatic for loop
//             for (var i = 0; i < fileNames.length; i++) {    //fileNames.length is the length of array of songs added
//                 addSongNameClickEvent(fileNames[i],i+1);
//               }
//
//
//             //Array OF Song Name
//               var songList = [
//                                 'Badri Ki Dulhania (Title Track)',  //[0] of songList that is songList[0]; like wise
//                                 'Humma Song',
//                                 'Nashe Si Chadh Gayi',
//                                 'The Breakup Song'
//                               ];
//
//           //array for songs artist name
//             var artistList = [
//                                 'Artist #1',
//                                 'Artist #2',
//                                 'Artist #3',
//                                 'Artist #4',
//                               ];
//         //array of Songs albumList
//             var albumList = [
//                             'Badrinath ki Dulhania',
//                             'Ok Jaanu',
//                             'Befikre',
//                             'Ae Dil Hai Mushkil'
//                           ];
// //array of song play duration
//           var durationList = [
//                                 '2:56',
//                                 '3:15',
//                                 '2:34',
//                                 '2:29'
//                             ];
//
// // after loading html files this js code will run automatically
//           window.onload = function() {
//
//               for(var i =0; i < songList.length;i++) {
//                   var name = '#song' + (i+1);
//                   var song = $(name);
//                   song.find('.song-name').text(songList[i]);
//                   song.find('.song-artist').text(artistList[i]);
//                   song.find('.song-album').text(albumList[i]); // Added
//                   song.find('.song-length').text(durationList[i]); // Added
//                   updateCurrentTime();                        //it will update the Current time of played song
//                   setInterval(function() {
//                     updateCurrentTime();
//                   },1000);                                     //this function say to update Current time at each (1 sec =1000) 1 second
//                 }
//               }















// //after Loading The Html File This Js Code Will Automatically Run
//         window.onload = function() {
//               $('#song1 .song-name').text(songList[0]); //code for secectiong id=Song1 inside class=song-name and add text or inner text first element 'string' of array SongList[];
//               $('#song2 .song-name').text(songList[1]);
//               $('#song3 .song-name').text(songList[2]);
//               $('#song4 .song-name').text(songList[3]);
//               updateCurrentTime();                        //it will update the Current time of played song
//               setInterval(function() {
//                 updateCurrentTime();
//               },1000);                                     //this function say to update Current time at each (1 sec =1000) 1 second
//             }

// //code for passing the variable valuse to function
//           $('#song1 .song-artist').text(artistList[0]);
//           $('#song2 .song-artist').text(artistList[1]);
//           $('#song3 .song-artist').text(artistList[2]);
//           $('#song4 .song-artist').text(artistList[3]);

// // refrence code 1.0 code for calling of function addSongNameClickEvent
// addSongNameClickEvent(fileNames[0],1);          //fileNames[0] and 1 is the value which is passes through the function
// addSongNameClickEvent(fileNames[1],2);
// addSongNameClickEvent(fileNames[2],3);
// addSongNameClickEvent(fileNames[3],4);




//
// // refrence 2.0 version 0 level //Code For Playing 1st song by clicking on it
//               $('#song1').click(function() {
//               var audio = document.querySelector('audio');
//               var currentSong = audio.src;
//               if(currentSong.search(fileNames[0]) != -1) //check for string are match or not with old played song
//                 {
//                   toggleSong();
//                 }
//               else {
//                   audio.src = fileNames[0];
//                   toggleSong();
//                   }
//               });
// //for 2nd song
//               $('#song2').click(function() {
//               var audio = document.querySelector('audio');
//               var currentSong = audio.src;
//               if(currentSong.search(fileNames[1]) != -1)
//                 {
//                   toggleSong();
//                 }
//               else {
//                   audio.src = fileNames[1];
//                     toggleSong();
//                   }
//               });
// //for 3rd song
//               $('#song3').click(function() {
//               var audio = document.querySelector('audio');
//               var currentSong = audio.src;
//               if(currentSong.search(fileNames[2]) != -1)
//                 {
//                   toggleSong();
//                 }
//               else {
//                   audio.src = fileNames[2];
//                     toggleSong();
//                   }
//               });
// //for 4th song
//               $('#song4').click(function() {
//               var audio = document.querySelector('audio');
//               var currentSong = audio.src;
//               if(currentSong.search(fileNames[4]) != -1)
//                 {
//                   toggleSong();
//                 }
//               else {
//                   audio.src = fileNames[0];
//                     toggleSong();
//                   }
//               });
//





// // old code in which click to pause not work
//                  $('#song1').click(function() {                   //select id=song1 using jquery
//                     var audio = document.querySelector('audio');    //it select the element or tags with name audio and store it on Audio variable
//                     audio.src = fileNames[0];                       //it will change the audio tags attribute Src to Array fileNames[0] means 1st element
//                     //audio.play();                                   //then it will play the song
//                     toggleSong();
//                   });
// // for 2nd song
//                   $('#song2').click(function() {
//                       var audio = document.querySelector('audio');
//                       audio.src = fileNames[1];
//                       // audio.play();
//                       toggleSong();
//                   });
// // for 3rd song
//                   $('#song3').click(function() {
//                       var audio = document.querySelector('audio');
//                       audio.src = fileNames[2];
//                       // audio.play();
//                       toggleSong();
//                   });
// // for 4th song
//                   $('#song4').click(function() {
//                       var audio = document.querySelector('audio');
//                       audio.src = fileNames[3];
//                       // audio.play();
//                       toggleSong();
//                   });
//






// // Old Code For Dynamically Show The Song Name
//     var songName1 = 'Badri Ki Dulhania (Title Track)';
//     var songName2 = 'Humma Song';
//     var songName3 = 'Nashe Si Chadh Gayi';
//     var songName4 = 'The Breakup Song';
//
//     window.onload = function(){
//       $('#song1 .song-name').text(songName1);
//       $('#song2 .song-name').text(songName2);
//       $('#song3 .song-name').text(songName3);
//       $('#song4 .song-name').text(songName4);
//       updateCurrentTime();
//       setInterval(function(){ //code like setTimeout but it will change the time at every 1 sec
//         updateCurrentTime();
//       },1000);//here 1000=1 sec for time out time period
//     }





//  code for run the function ater 5 second of loading website
     //  setTimeout(function(){
     //  var name;
     //  name=document.querySelector('#name-input').value;
     // console.log(name);
     // },5000);


            // my Own Play and Pause Button In js by using Class Interchnage Concept
            // <i class="fa fa-play clickable play-icon play playsong" aria-hidden="true"></i>
                    // $('.playsong').on('click',function(){
                    //   var song = document.querySelector('audio');
                      // $('.play').addClass('fa-pause');
                      // $('.play').addClass('pausesong');
                      // $('.play').removeClass('fa-play');
                    //   song.play();
                    //   console.log('play it');
                    // });
                    //
                    // $('.pausesong').on('click',function(){
                    //   var song = document.querySelector('audio');
                    //   $('.play').addClass('fa-play');
                    //   $('.play').addClass('playsong');
                    //   $('.play').removeClass('fa-pause');
                    //   song.pause();
                    //   console.log('stop it')
                    // });

// code for Play and Pause Butoon by using if else Condition

 //old Code For playing song when icon of play button or space key from keybord is pressed " Using Function Concept"








 // //old Code For playing song when icon of play button or space key from keybord is pressed "without Using Function Concept"

           //     // code for play-icon click event function
           //     $('.play-icon').on('click', function(){
           //       var song = document.querySelector('audio');
           //       // it check wheather the Condition is true song is paused
           //       if(song.paused == true){
           //         // console.log("play it");
           //         song.play();
           //         $('.play-icon').addClass('fa-pause').removeClass('fa-play');
           //       }
           //       else{
           //         // console.log("Pause it");
           //         song.pause();
           //         $('.play-icon').addClass('fa-play').removeClass('fa-pause');
           //       }
           //     });
           //
           // // same code for check is keypress from keyboard or not
           //   $('body').on('keypress',function(event) {
           //     // check if the keypress is space bar (ASCII 32 OF Space Bar) or not
           //     if (event.keyCode == 32){
           //       var song = document.querySelector('audio');
           //       // it check wheather the Condition is true song is paused
           //       if(song.paused == true){
           //         // console.log("play it");
           //         song.play();
           //         $('.play-icon').addClass('fa-pause').removeClass('fa-play');
           //       }
           //       else{
           //         // console.log("Pause it");
           //         song.pause();
           //         $('.play-icon').addClass('fa-play').removeClass('fa-pause');
           //       }
           //     }
           //   });



                             // // old javascript code in code javascript language
                             //         var button = document.querySelector('.welcome-screen button');
                             //         button.addEventListener('click',function()
                             //       {
                             //         // alert('you Clicked me');
                             //         var name = document.querySelector('#name-input').value;
                             //         console.log(name);
                             //       });
