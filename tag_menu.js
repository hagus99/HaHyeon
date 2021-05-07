function loadJQuery() {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";		  
    oScript.src = "http://code.jquery.com/jquery-1.6.2.min.js";	
    document.getElementsByTagName("head")[0].appendChild(oScript);
}


let menu = document.getElementById('tag_menu');
//create new div element
let history = document.createElement('div');
history.textContent = 'History';
menu.appendChild(history);

let Bible = document.createElement('div');
Bible.textContent = 'Bible';
menu.appendChild(Bible);

let Playlist = document.createElement('div');
Playlist.textContent = 'Playlist';
menu.appendChild(Playlist);

let Booklist = document.createElement('div');
Booklist.textContent = 'Booklist';
menu.appendChild(Booklist);

let movies = document.createElement('div');
movies.textContent = 'Movies';
menu.appendChild(movies);


let travel = document.createElement('div');
travel.textContent = 'Travel';
menu.appendChild(travel);

console.log(menu.innerHTML);

