document.getElementById('link-proyectos').addEventListener('click', (e) => {
    e.preventDefault()
    const proyectos = document.querySelector('.proyectos')
    proyectos.scrollIntoView({ behavior: 'smooth' })
});

document.getElementById('link-contacto').addEventListener('click', (e) => {
    e.preventDefault()
    const proyectos = document.querySelector('.content-contacto')
    proyectos.scrollIntoView({ behavior: 'smooth' })
});

//botones cursos
document.querySelectorAll('.titulo-curso-name').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let contenedor = btn.closest('.titulo-curso');
        let info = contenedor.querySelectorAll('.info')
        info.forEach(i => {
            i.classList.toggle('info-mostrar');
        })
    })
})

//scroll-fade
window.addEventListener('scroll', () => {
    let elementos = document.querySelectorAll('.contenido-fade');

    elementos.forEach((elemento) => {
        let posicionElemento = elemento.getBoundingClientRect();

        if (posicionElemento.top < window.innerHeight && posicionElemento.bottom > 0) {
            elemento.classList.add('visible')
        }
        else {
            elemento.classList.remove('visible')
        }

    })
})

document.getElementById('copiarCorreo').addEventListener('click',() =>{
    const correo = 'valdezgabriel47@gmail.com'
    navigator.clipboard.writeText(correo).then(()=>{
        alert('Correo copiado 📋');
    }).catch(err =>{
        console.error('Error al copiar' ,err)
    })

})