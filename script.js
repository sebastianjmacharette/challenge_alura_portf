// Seleccionamos el botón del menú hamburguesa usando el selector de la clase '.cabecera__menu-boton'
const botonMenu = document.querySelector('.cabecera__menu-boton');

// Seleccionamos la lista de navegación que queremos mostrar/ocultar usando el selector de la clase '.navegacion__lista'
const listaNavegacion = document.querySelector('.navegacion__lista');

// Añadimos un "event listener" al botón del menú para que ejecute la siguiente función cuando se haga clic sobre él
botonMenu.addEventListener('click', () => {
    
    // Utilizamos "classList.toggle" para agregar o quitar la clase 'mostrar' en la lista de navegación.
    // Si la clase 'mostrar' no está presente, se agrega, y si está presente, se quita.
    // Esto hace que el menú se muestre o se oculte cada vez que se haga clic en el botón.
    listaNavegacion.classList.toggle('mostrar');
});
