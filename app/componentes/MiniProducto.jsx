import estilo from "../estaticos/estilos/miniProducto.module.css"

function MiniProducto() {
    return ( <>
    <h1 className={estilo.textoRojo}>Soy la mini vista de un producto</h1> 
    </>
    );
}

export default MiniProducto;