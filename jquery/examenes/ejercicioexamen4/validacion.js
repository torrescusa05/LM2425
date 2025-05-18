
var contrasena1 = document.getElementById('contrasena1');
var contrasena2 = document.getElementById('contrasena2');
var aceptarterminos = document.getElementById('aceptarTerminos');

//Funciones de validación
function validarnombre ()
{
    var nombre = document.getElementById('nombre').value;
    if (nombre.length === 0)
    {
        document.getElementById("error-nombre").style.display = "block";
        document.getElementById("error-nombre").innerHTML = "El nombre no puede estar vacío";
    }
    else
    {
        document.getElementById("error-nombre").setAttribute('class', 'error');
    }
    return false;
};

function validarapellido ()
{
    var apellidos = document.getElementById('apellidos').value;
    if (apellidos.length === 0)
    {
        document.getElementById("error-apellidos").style.display = "block";
        document.getElementById("error-apellidos").innerHTML = "Los apellidos no pueden estar vacíos";
        return false;
    }
    else
    {
        document.getElementById("error-apellidos").setAttribute('class', 'error');
    }
}

function validartelefono ()
{
    var telefono = document.getElementById('telefono');
    if (telefono.length === "" || telefono.length >= 9 && telefono.length <=15)
    {
        document.getElementById("error-telefono").style.display = "block";
        document.getElementById("error-telefono").innerHTML = "Introduce un teléfono válido entre (9 y 15 dígitos)";
    }
}

function validarcorreo ()
{
    var email = document.getElementById('email');
    if (email === 0)
    {
        document.getElementById("error-email").style.display = "block";
        document.getElementById("error-email").innerHTML = "Introduce un teléfono válido entre (9 y 15 dígitos)";
    }
}

function validacion ()
{
    validarnombre();
    validarapellido();
    validartelefono ();
    validarcorreo();
};

