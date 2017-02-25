var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log(songs);

//remove typos
var strSong = songs.toString();
var typos = [];
typos = strSong.replace(/[*@(!)]/g, "");
console.log(typos);	

//convert string to array
var songArray = typos.replace(/[>]/g, "-")
				.split(',');


 
//Add each string to the DOM in index.html in the main content area.
for (var i=0; i < songArray.length; i++) {
	document.getElementById("songs").innerHTML += songArray[i] + "<br>";
}




