const btnMobile = document.getElementById('btnMobile');

function toggleMenu () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
   
}

btnMobile.addEventListener('click', toggleMenu);


function closeMenu () {
    const nav = document.getElementById('nav');
    nav.classList.remove('active');
}