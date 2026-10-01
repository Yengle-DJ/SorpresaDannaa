function mostrarPagina() {

    const inicio = document.querySelector(".inicio");
    const contenido = document.getElementById("contenido");

    // Ocultar la portada suavemente
    inicio.style.opacity = "0";

    setTimeout(() => {

        // Quitar la portada
        inicio.style.display = "none";

        // Mostrar el contenido
        contenido.style.display = "block";

        // Volver al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);

}