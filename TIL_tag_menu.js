
let menu = document.getElementById('tag_menu');
//create new div element

let Class = document.createElement('button');
Class.textContent = '#Class';
Class.addEventListener('click',MClass);

function MClass(event){
    window.location.href="https://hagus99.github.io/HaHyeon/TIL.html#Class"
}

menu.appendChild(Class);

let Study = document.createElement('button');
Study.textContent = '#Study';

Study.addEventListener('click',MStudy);

function MStudy(event){
    window.location.href="https://hagus99.github.io/HaHyeon/TIL.html#Study"
}
menu.appendChild(Study);

let Language = document.createElement('button');
Language.textContent = '#Language';

Language.addEventListener('click',MLanguage);

function MLanguage(event){
    window.location.href="https://hagus99.github.io/HaHyeon/TIL.html#Language"
}

menu.appendChild(Language);



console.log(menu.innerHTML);
