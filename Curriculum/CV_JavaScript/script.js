const titulos = document.querySelectorAll(".MOSTRAR");

titulos.forEach(titulo => {
    const contenido = titulo.nextElementSibling;
    let fijo = false;


    titulo.addEventListener("mouseenter", () => {
        if (!fijo) {
            contenido.classList.remove("oculto");
        }
    });

    titulo.addEventListener("mouseleave", () => {
        if (!fijo) {
            contenido.classList.add("oculto");
        }
    });

    titulo.addEventListener("click", () => {
        fijo = !fijo;
        if(fijo){
            contenido.classList.remove("oculto");
        }else{
            contenido.classList.add("oculto");
        }
    });
});
document.getElementById("btn").addEventListener("click", () => {
    const elemento = document.querySelector(".contenedor");
       const contenidos = document.querySelectorAll(".contenido");

    contenidos.forEach(c => c.classList.remove("oculto"));

    const opciones = {
        margin: 0,
        filename: 'CV_Rajiv_Eduardo_Vasquez_Andres.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2},
        jsPDF: { unit: 'px', format: [816,1056], orientation: 'portrait' }
    };

    html2pdf().set(opciones).from(elemento).save();
});

