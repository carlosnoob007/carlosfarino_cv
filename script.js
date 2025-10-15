const areaDatos = document.getElementById("datosPersonales");
const logo = document.getElementById("logo");
const info = document.getElementById("info");
const menuNav = document.getElementById("menuNav");
const botonMovil = document.getElementById("botonMovil");
const iconoMenu = document.getElementById("iconoMenu");


botonMovil.addEventListener("click", () => {
    menuNav.classList.toggle("hidden");
    menuNav.classList.toggle("flex");
    menuNav.classList.toggle("flex-col");
    menuNav.classList.toggle("animate-fadeIn");

    // Animar el ícono (rotación al abrir)
    iconoMenu.classList.toggle("rotate-90");
});


function cambioDatos() {

    switch(areaDatos.value) {
        case "cedula":
            logo.src = "imagenes/identificacion.png";
            logo.alt = "id" ;
            info.textContent = "0958460214";
            break;
        case "telefono":
            logo.src = "imagenes/telefono.png";
            logo.alt = "telf" ;
            info.textContent = "+593-988471445";
            break;
        case "correo":
            logo.src = "imagenes/gmail.png";
            logo.alt = "email" ;
            info.textContent = "carlosfcj16@gmail.com";
            break;
        case "direccion":
            logo.src = "imagenes/ubicacion.png";
            logo.alt = "location" ;
            info.textContent = "Samborondón(Cabecera Cantonal)-Av. San Miguel y Callejón 1";
            break;
    }
}

// Animación sencilla para que el menú aparezca de forma suave
tailwind.config = {
    theme: {
      extend: {
        keyframes: {
            fadeIn: {
                "0%": { opacity: "0", transform: "translateY(-10px)" },
                "100%": { opacity: "1", transform: "translateY(0)" },
            },
        },
        animation: {
            fadeIn: "fadeIn 0.4s ease-in-out",
        },
      },
    },
};




