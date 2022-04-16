
const $formulario = document.querySelector("#formulario"),
    $nombre = document.querySelector("#nombre"),
    $correo = document.querySelector("#correo");
$formulario.onsubmit = evento => {
    evento.preventDefault();
    const nombre = $nombre.value,
        correo = $correo.value;
    $formulario.submit();
};

