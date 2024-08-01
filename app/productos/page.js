import estilo from "../estaticos/estilos/productos.module.css"
import MiniProducto from "../componentes/MiniProducto";



function Productos() {
    return ( 
    <>
    <h1 className={estilo.textoRojo}> Lista de productos </h1>
<MiniProducto></MiniProducto>
    </>
      );
}

export default Productos;