
let menu = document.getElementById('tag_menu');
//create new div element

let Class = document.createElement('div');
Class.textContent = 'Class';
menu.appendChild(Class);

let Study = document.createElement('div');
Study.textContent = 'Study';
menu.appendChild(Study);

let Language = document.createElement('div');
Language.textContent = 'Language';
menu.appendChild(Language);



console.log(menu.innerHTML);
