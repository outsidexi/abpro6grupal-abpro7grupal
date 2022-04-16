$(document).ready(function() {    
    $('#tabla').DataTable({
    //para cambiar el lenguaje a español
        "language": {
                        "lengthMenu": "Mostrar _MENU_ filas",
                        "zeroRecords": "No se encontraron resultados",
                        "info": "Mostrando de _START_ a _END_ del total de _TOTAL_ registros",
                        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                        "sSearch": "Buscar:",
                        
                        "oPaginate": {
                                        "sFirst": "Primero",
                                        "sLast":"Último",
                                        "sNext":"Siguiente",
                                        "sPrevious": "Anterior"
			                        },
			            "sProcessing":"Procesando...",
                    }
    });     
});