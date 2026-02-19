let contador = 0;
    function incrementarContador() {
        contador++;

        document.getElementById("valorContador").innerHTML = contador;
    }

    function contarCaracteres() {
        

        let texto = document.getElementById("cuantosCaracteresHay").value;

        let cantidadCaracteres = texto.length;

        document.getElementById("contadorCaracteres").innerHTML = cantidadCaracteres;
}

    function cambiarFondo(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
    

    function cambiaColor(color){
        document.querySelector(".caja").style.backgroundColor = color;
    }
    function restauraColor() {
        document.querySelector(".caja").style.backgroundColor = "var(--primary-dark)";
    }

    function validarFormulario() {
        
        let email = document.getElementById("email").value;
        let telefono = document.getElementById("telefono").value;
        
        const nombre = document.getElementById('nombre').value;
        const mensaje = document.getElementById('mensaje').value;
        const errores = document.getElementById('errores');
        errores.innerHTML = '';
    
        
        if (nombre === "") {
        errores.innerHTML += "<p>El nombre es obligatorio.</p>";
    } else {
        // solo letras y espacios
        const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!soloLetras.test(nombre)) {
            errores.innerHTML += '<p>El nombre solo puede contener letras y espacios.</p>';
        }
    }
        if (email == "") {
            errores.innerHTML += "El email es obligatorio.<br>";
        } else if (!email.includes("@") || !email.includes(".")){
            errores.innerHTML += "El email no es válido.<br>";
        }
        if (mensaje == "") {
            errores.innerHTML += "El mensaje es obligatorio.<br>"
        } else if (mensaje.length > 200) {
        errores.innerHTML += '<p>El mensaje no puede superar los 200 caracteres.</p>';
    }

        if (errores.innerHTML !== "") {
        return false;
    } else {
        
        alert(
            "Formulario enviado correctamente.\n\n" +
            "Nombre: " + nombre + "\n" +
            "Email: " + email + "\n" +
            "Mensaje: " + mensaje
        );
        return true;
    }
    }
    
// inyecta el año actual en el footer
document.getElementById("anhoActual").textContent = new Date().getFullYear();


function actualizarContador() {
    const mensaje = document.getElementById('mensaje').value;
    document.getElementById('contadorMensaje').textContent =
        `${mensaje.length} / 200 caracteres`;
}


    