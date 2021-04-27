//////////tag_list//////////////
let list = document.getElementById('tag_list');
//create new div element
let l_movies = document.createElement('div');
l_movies.textContent = 'Movies';
l_movies.className='l_title';
list.appendChild(l_movies);

let hr = document.createElement('hr');
list.appendChild(hr);

console.log(list.innerHTML);