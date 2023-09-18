document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const slides = document.querySelectorAll(".slide");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Cambiar automáticamente las imágenes cada 5 segundos (5000 milisegundos)
    setInterval(nextSlide, 3000);

    showSlide(currentIndex);
});

window.addEventListener("scroll", function() {
    const scrollBox = document.getElementById("scrollBox");
    const scrollPosition = window.scrollY;

    // Altura y anchura del cuadro gris cuando se muestra
    const boxHeight = 50; // Cambia este valor según tus preferencias
    const boxWidth = 97; // Cambia este valor según tus preferencias

    if (scrollPosition > boxHeight) {
        // Mostrar el cuadro gris con la altura y anchura especificadas
        scrollBox.style.height = boxHeight + "px";
        scrollBox.style.width = boxWidth + "%"; // Utiliza porcentaje para la anchura
        scrollBox.style.opacity = "1";
    } else {
        // Ocultar el cuadro gris
        scrollBox.style.height = "0";
        scrollBox.style.width = "0";
        scrollBox.style.opacity = "0";
    }
});
