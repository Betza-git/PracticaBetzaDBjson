import { getData, postData } from "./llamados.js"

const Nombre = document.getElementById("Nombre")
const precio = document.getElementById("precio")
const stock  = document.getElementById("stock")
const Agregar = document.getElementById("Agregar")
const mostrarLista = document.getElementById("mostrarLista")
Agregar.addEventListener("click",async function () {

    // let producto = {
    //     "nombreProducto": Nombre.value,
    //     "precioProducto": precio.value,
    //     "stockProducto": stock.value
    // }
    // await postData(producto)

    await postData({
        "nombreProducto": Nombre.value,
        "precioProducto": precio.value,
        "stockProducto": stock.value
    })
})
async function mostrarProductos() {
    const datos = await getData()
    console.log(datos);

    datos.forEach(producto => {
       
        let infoProducto = document.createElement("p")
        infoProducto.textContent = `Nombre ${producto.nombreProducto} Precio ${producto.precioProducto} Cantidad ${producto.stockProducto}`
        mostrarLista.appendChild(infoProducto)


        // let nombreProducto = document.createElement("p")
        // let precioProducto = document.createElement("p")
        // let stockProducto = document.createElement("p")

        // nombreProducto.textContent = producto.nombreProducto
        // precioProducto.textContent = producto.precioProducto
        // stockProducto.textContent = producto.stockProducto

        // mostrarLista.appendChild(nombreProducto)
        // mostrarLista.appendChild(precioProducto)
        // mostrarLista.appendChild(stockProducto)

    });
}

mostrarProductos()