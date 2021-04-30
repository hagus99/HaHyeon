
let menu = document.getElementById('tag_menu');
//create new div element
let movies = document.createElement('div');
movies.textContent = 'Movies';
menu.appendChild(movies);


let travel = document.createElement('div');
travel.textContent = 'Travel';
menu.appendChild(travel);

console.log(menu.innerHTML);
