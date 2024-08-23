
const campoNombre = document.getElementById('CampoNombre');
const campoComentario = document.getElementById('CampoComentario');
const agregarComentarioBtn = document.getElementById('AgregarComentario');
const listaComentarios = document.getElementById('Lista');
const contador = document.getElementById('Contador');
const maxCaracteres = 200;

function actualizarContador() {
    const caracteresRestantes = maxCaracteres - campoComentario.value.length;
    contador.textContent = `${caracteresRestantes} caracteres restantes`;
}

campoComentario.addEventListener('input', actualizarContador);

function agregarComentario() {
    const nombre = campoNombre.value.trim();
    const comentario = campoComentario.value.trim();

    switch (true) {
        case (nombre === ''):
            alert('El campo de nombre no puede estar vacío');
            break;
        case (comentario === ''):
            alert('El campo de comentario no puede estar vacío');
            break;
        default:
            const nuevoComentario = document.createElement('li');
            nuevoComentario.textContent = `${nombre}: ${comentario}`;
            listaComentarios.appendChild(nuevoComentario);

            campoNombre.value = '';
            campoComentario.value = '';
            actualizarContador();

            nuevoComentario.addEventListener('dblclick', function() {
                this.remove();
            });
            break;
    }
}

agregarComentarioBtn.addEventListener('click', agregarComentario);
