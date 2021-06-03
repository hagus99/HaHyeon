function loadJQuery() {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";		  
    oScript.src = "http://code.jquery.com/jquery-1.6.2.min.js";	
    document.getElementsByTagName("head")[0].appendChild(oScript);
}


let menu = document.getElementById('tag_menu');
//create new div element
let history = document.createElement('button');
history.textContent = '#History';

history.addEventListener('click',Mhistory);

function Mhistory(event){
    window.location.href = 'https://hagus99.github.io/HaHyeon/tag.html#history'
}
menu.appendChild(history);



let Bible = document.createElement('button');
Bible.textContent = '#Bible';

Bible.addEventListener('click',Mbible);

function Mbible(event){
    window.location.href = 'https://hagus99.github.io/HaHyeon/tag.html#bible'
}

menu.appendChild(Bible);

let Playlist = document.createElement('button');
Playlist.textContent = '#Playlist';

Playlist.addEventListener('click',MPlaylist);

function MPlaylist(event){
    window.location.href = 'https://hagus99.github.io/HaHyeon/tag.html#playlist'
}

menu.appendChild(Playlist);

let Booklist = document.createElement('button');
Booklist.textContent = '#Booklist';

Booklist.addEventListener('click',Mbooklist);

function Mbooklist(event){
    window.location.href = 'https://hagus99.github.io/HaHyeon/tag.html#booklist'
}
menu.appendChild(Booklist);



let movies = document.createElement('button');
movies.textContent = '#Movies';

movies.addEventListener('click',Mmovies);

function Mmovies(event){
    window.location.href = 'https://hagus99.github.io/HaHyeon/tag.html#movies'
}

menu.appendChild(movies);


let travel = document.createElement('button');
travel.textContent = '#In & Out';

travel.addEventListener('click',Mtravel);

function Mtravel(event){
    window.location.href = 'https://hagus99.github.io/HaHyeon/tag.html#travel'
}

menu.appendChild(travel);



console.log(menu.innerHTML);

