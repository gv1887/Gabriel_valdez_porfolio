document.getElementById('link-proyectos').addEventListener('click', (e) => {
    e.preventDefault()
    const proyectos = document.querySelector('.proyectos')
    proyectos.scrollIntoView({ behavior: 'smooth' })
});


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
