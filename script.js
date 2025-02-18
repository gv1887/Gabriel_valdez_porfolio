document.getElementById('link-proyectos').addEventListener('click', (e)=>{
    e.preventDefault()
    const proyectos = document.querySelector('.proyectos')
    proyectos.scrollIntoView({behavior:'smooth'})
});



window.addEventListener('scroll',()=>{
    let elementos = document.querySelectorAll('.contenido-fade');

    elementos.forEach((elemento)=>{
        let posicionElemento = elemento.getBoundingClientRect();

        if (posicionElemento.top < window.innerHeight && posicionElemento.bottom > 0){
            elemento.classList.add('visible')
        }
        else{
            elemento.classList.remove('visible')
        }

    })




})
