function validardatos() { 
    /* Comentario */


    //alert("Hola Mundo")
    //prompt("Ingrese su nombre")
    //console.log("Hola Mundo")
    //document.write ("Hola Mundo")

    let Nombre = document.getElementById("name").value

    alert(Nombre);

    if(Nombre=="Diana Romero"){
        alert('Bienvenida')
    }
    else{
        alert('No eres bienvenida');
    }
    
    let Email = document.getElementById("email").value

    alert(Email);

    if(Email=="dianaromero7@yahoo.es"){
        alert('Bienvenida')
    }
    else{
        alert('No eres bienvenida');
    }

    let Edad = document.getElementById("number").value

    alert(Edad);

    if(Edad==">18"){
        alert('Bienvenida')
    }
    else{
        alert('No eres bienvenida');
    }
    
    
    



}