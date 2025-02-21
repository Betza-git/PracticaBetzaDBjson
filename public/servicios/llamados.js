const API_URL = "http://localhost:1510/productos/"

async function postData(productos) {
    try {
        const peticion = await fetch(API_URL,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productos)
        })
        const datos = await peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}

async function getData() {
    try {
        const peticion = await fetch(API_URL) // CONEXIÓN
        const datos = await peticion.json() // GUARDAMOS EL RESULTADO EN UNA VARIABLE
        console.log(datos);
        return datos // LOS RETORNAMOS PARA USARLOS EN DONDE QUERAMOS
    } catch (error) {
        console.error(error);
    }
}

async function putData(id,producto) {
    try {
        const peticion = await fetch(API_URL+id,{
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })
        const datos = await peticion.json()
        console.log(datos);
        return datos
        
    } catch (error) {
        console.error(error);
        
    }
}
async function patchData(id,producto) {
    try {
        const peticion = await fetch(API_URL+id,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        })
            const datos = await peticion.json()
            console.log(datos);
            return datos
            
    } catch (error) {
        console.error(error);
        
    }
}

async function deleteData(id) {
    try {
        const peticion = await fetch(API_URL+id,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const datos = await peticion.json()
        console.log(datos);
        return datos
    } catch (error) {
        console.error(error);
    }
}

export {postData,getData,patchData,putData,deleteData}