
let menu = document.getElementById('tag_menu');
//create new div element

let Class = document.createElement('button');
Class.textContent = '#Class';
Class.addEventListener('click',MClass);

function MClass(event){
    window.location.href="file:///Users/hahyeon/Desktop/CHEESE/Hahyeon/TIL.html#class"
}

menu.appendChild(Class);

let Study = document.createElement('button');
Study.textContent = '#Study';

Study.addEventListener('click',MStudy);

function MStudy(event){
    window.location.href="file:///Users/hahyeon/Desktop/CHEESE/Hahyeon/TIL.html#study"
}
menu.appendChild(Study);

let Language = document.createElement('button');
Language.textContent = '#Language';

Language.addEventListener('click',MLanguage);

function MLanguage(event){
    window.location.href="file:///Users/hahyeon/Desktop/CHEESE/Hahyeon/TIL.html#language"
}

menu.appendChild(Language);



console.log(menu.innerHTML);
