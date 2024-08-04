import { pedidoDinamico } from "../libs/libreria";
import ContenidoExclusivo from "../componentes/ContenidoExclusivo"
import CarritoDetalle from "../componentes/CarritoDetalle"


export default async function laboratorio() {

        // PEDIDO A FIREBASE OS DATOS DE LA SECCION PRODUCTOS
const url = "https://angava-store-default-rtdb.firebaseio.com/productos.json"

// Guardo la info en una constante
const seteoPagina = await pedidoDinamico (url)
console.log("desde el laboratorio: ", seteoPagina)

    return ( <>
    <h1>Soy un entorno de pruebas</h1>
    <ContenidoExclusivo></ContenidoExclusivo>
    <CarritoDetalle></CarritoDetalle>
    </>  );
}

