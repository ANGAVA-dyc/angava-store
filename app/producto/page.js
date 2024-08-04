import estilo from "../estaticos/estilos/detalleProducto.module.css"
import DetalleProducto from "../componentes/DetalleProducto";

function Producto() {
    return ( 
    <>
    <div className={estilo.contenedor}>
    <DetalleProducto></DetalleProducto>
    </div>
    </>
    );
}

export default Producto;