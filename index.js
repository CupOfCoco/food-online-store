let menuBar = document.querySelector('#menuBar');
let menu = document.querySelector('.menu');


menuBar.addEventListener('click', () =>{
    menuBar.classList.toggle('bx-window-close');
    menu.classList.toggle('active');
});
// menu.style.display = none;

// function menuBar() {
//     if (menu.style.display == 'none') {
//         menu.style.display = 'block';
//     }
//     else{
//         menu.style.display = none;
//     }
// };
//clip-path: polygon(0 0,100% 0%,100% 0%,0 0); *