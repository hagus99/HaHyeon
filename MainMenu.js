let topmenu = document.getElementById('main_menu');
// create the elements in ul

let about = document.createElement('li');
about.textContent = 'ABOUT';
topmenu.appendChild(about);
about.addEventListener('click',Mabout);
function Mabout(event){
    window.location.href="https://hagus99.github.io/HaHyeon/about.html"
}


let til = document.createElement('li');
til.textContent = 'TIL';
topmenu.appendChild(til);
til.addEventListener('click',Mtil);
function Mtil(event){
    window.location.href="https://hagus99.github.io/HaHyeon/TIL.html"
}

let log = document.createElement('li');
log.textContent = 'LOG';
topmenu.appendChild(log);
log.addEventListener('click',Mlog);
function Mlog(event){
    window.location.href="https://hagus99.github.io/HaHyeon/tag.html"
}

let magazine = document.createElement('li');
magazine.textContent = 'H.Magazine';
topmenu.appendChild(magazine);

magazine.addEventListener('click',Mmagazine);

function Mmagazine(event){
    window.location.href="https://hagus99.github.io/HaHyeon/magazine.html"
}


let project = document.createElement('li');
project.textContent = 'H.Project';
topmenu.appendChild(project);
project.addEventListener('click',Mproject);
function Mproject(event){
    window.location.href="";
}


console.log(topmenu.innerHTML);