$(document).ready(function()
{
    var h5a = $("h5").length;

    $("#comprobar").click(function() 
    { 
        if (h5a == 0)
        {
            console.log("No hay ningún elemento h5")
        }
        else
        {
            console.log("Existe un elemento h5")
        }
    });
});