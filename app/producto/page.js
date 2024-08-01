import estilo from "../estaticos/estilos/detalleProducto.module.css"

function detalleProducto() {
    return ( 
    <>
    <h1 className={estilo.textoRojo}>Soy el detalle de un producto</h1> 
    </>
    );
}

export default detalleProducto;