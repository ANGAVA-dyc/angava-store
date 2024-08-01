import Link from "next/link";
import estilo from "../estaticos/estilos/header.module.css"

function Header() {
  return (
    <nav>
      <Link href="/" className={estilo.navBtn} >Home</Link>
      <Link href="/productos" className={estilo.navBtn} >Productos</Link>
      <Link href="/producto" className={estilo.navBtn} >Detalle</Link>
      <Link href="/favoritos" className={estilo.navBtn} >Favoritos</Link>
    </nav>
  );
}

export default Header;
