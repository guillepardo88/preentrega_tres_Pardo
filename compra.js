function agregar_carrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    let bisabuelo = abuelo.parentNode;

    let nombre_producto = abuelo.querySelector("h2").textContent;
    let precio_producto = abuelo.querySelector("span").textContent;

    console.log(nombre_producto);
    console.log(precio_producto);

    let producto = {

        nombre: nombre_producto,
        precio: precio_producto,
        cantidad: 1

    };

    mostrar_carrito(producto);

}

function mostrar_carrito(producto){

    let fila = document.createElement("tr");

    fila.innerHTML = `<td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td><button class="boton_borrar">Borrar</button></td>`;

    let tabla = document.getElementById("cuerpoTabla");
    tabla.append(fila);

    let btn_borrar = document.querySelectorAll(".boton_borrar");

    for (let boton of btn_borrar){

        boton.addEventListener("click", borrar_producto);
    }

}

function borrar_producto(e){

    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();

}

let btn_compra = document.querySelectorAll(".botonCompra");

console.log(btn_compra);

for (let boton of btn_compra){

    boton.addEventListener("click", agregar_carrito);

}









