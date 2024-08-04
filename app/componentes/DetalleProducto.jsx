import { pedidoDeDatos } from "../libs/libreria"
import BotonAccion from "./BotonAccion"


//convierto este componente en una funcion ASYNC
export default async function detalleProducto() {

    // PEDIDO A FIREBASE OS DATOS DE LA SECCION PRODUCTOS
const url = "https://angava-store-default-rtdb.firebaseio.com/productos.json"

    // Guardo la info en una constante
    const seteoPagina = await pedidoDeDatos(url)
    console.log("desde la libreria: ", seteoPagina)

    return ( <>
    <div className="detalleProducto">
        <h1>DETALLE DE PRODUCTO</h1>
        <p>Imagen principal del producto</p>
        <p>Descripcion detallada</p>
        <p>Especifiaciones tecnicas</p>
        <p>Precio</p>
        <BotonAccion></BotonAccion>
    </div>
    
    </>
    );
}

