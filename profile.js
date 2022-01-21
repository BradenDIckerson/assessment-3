
function handleClick(evt) {
evt.preventDefault();

}




let favColor = document.querySelector("button#color");

favColor.addEventListener('click', () => {
    alert('Blue or Red is my favorite color.');
});

let favPlace = document.querySelector("button#place");

favPlace.addEventListener('click', () => {
    alert('Mesa Verde was a cool place to visit.');
});

let favRitual = document.querySelector("button#ritual");

favRitual.addEventListener('click', () => {
    alert('FIREBALLLLLL!!!!!!!!!!!!!!');
});
