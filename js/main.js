const menu = document.querySelector('.hambur');
menu.addEventListener('click', function() {
    console.log('anda')
    document.querySelector('.contenedor-menu').classList.toggle('active');
    document.querySelector('.abrir').classList.toggle('active');
    document.querySelector('.cerrar').classList.toggle('active');
});