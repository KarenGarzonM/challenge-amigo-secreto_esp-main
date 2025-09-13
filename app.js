let amigos = []; //Se crea una lista vacía para agregar los nombres

// Función para agregar todos los nombres de los amigos
function agregarAmigo() {

    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    //Si el campo de nombre está vacío, suelta una alerta pidiendo que ingrese un nombre
    
    if (nombre === "") {
        alert("Por favor ingresa un nombre");
        return;
    }

    //Agregar el nombre a la lista.
    amigos.push(nombre);

    //Mostramos los nombres de la lista.
    mostrarLista();

    //Limpiar el campo para poder ingresar más nombres.
    input.value = "";
}

// Función para mostrar la lista de amigos.
function mostrarLista() {

    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; 
    
    //Se recorre la lista.
    amigos.forEach((amigo) => {

        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
    alert("No se han agregado amigos. No se puede sortear");
    return;
}

//Generamos un número aleatorio y recorremos la lista hasta llegar al número aleatorio
const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSecreto = amigos[indiceAleatorio];

//Mostrar el resultado
const resultado = document.querySelector("#resultado");
resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
}
