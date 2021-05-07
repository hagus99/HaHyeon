
let menu = document.getElementById('tag_menu');
//create new div element

let Class = document.createElement('button');
Class.textContent = 'Class';
Class.addEventListener('click',MClass);

function MClass(event){
    window.location
}

menu.appendChild(Class);

let Study = document.createElement('button');
Study.textContent = 'Study';
menu.appendChild(Study);

let Language = document.createElement('button');
Language.textContent = 'Language';
menu.appendChild(Language);



console.log(menu.innerHTML);
