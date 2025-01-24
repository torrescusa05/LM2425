//gestorArrays.html
var lista = [];
//Añadir número al array
function anadir()
{
    var numero = parseInt(document.getElementById('num').value);
    //Comprobador de numero
    if (isNaN(numero) || numero<0)
    {
        alert("Por favor introduzca un número válido (entero y positivo)");
        return;
    }
    lista.push(numero);
    document.getElementById('final').innerHTML = "El nº " +numero+ " ha sido añadido";
}


//Ordenar lista y mostrarlo por pantalla
function ordenar()
{
    orden = lista.sort( ); //Espacio que se lo traga el programa???? No tiene sentido
    document.getElementById("final").innerHTML = "Su lista de número es " +orden;
}


//Realizar media
function media ()
{
    var suma = 0;
    var total = lista.length;
    for (var i = 0; i < total; i++) //Es <, ya que .length siempre nos indicará el número desde 1, pero la primera posición de la lista es el número 0, 
    //si ponemos i <= total superamos por 1 el límite de la lista
    {
        suma = suma + lista[i];
    }
    var media = suma/total;
    document.getElementById("media").innerHTML = "La media es de " +media;
}

