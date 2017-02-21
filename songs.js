var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function addMusic() {
}

var allSongs = songs.push(songs[songs.length]);
console.log(songs);

//remove typos
console.log(typeof songs);
var strSong = songs.toString();
var typos = [];
typos = strSong.replace(/[*@(!)]/g, "");
console.log(typos);	

//convert string to array
var songArray = typos.replace(/[>]/g, "-")
				.split('"');
console.log(songArray);

//loop thru array
// for (var i=0; i < typos.length; i++) {
//     var printSongs ="";
//     printSongs += "<br>"+typos[i];
//     }
//    return printSongs;






//add to beginning of array

document.getElementById("songs").innerHTML += songArray;

//add to end of array
songArray.push("songs");
console.log(songArray);




// Must add each string to the DOM in index.html in the main content area.
//document.getElementById("song-info").innerHTML = addMusic();