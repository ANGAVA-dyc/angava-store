import Link from "next/link";
import estilo from "../estaticos/estilos/header.module.css"

function Header() {
  return (
    <header className={estilo.header}>
    <nav>
      <Link href="/" className={estilo.navBtn} >Home</Link>
      <Link href="/productos" className={estilo.navBtn} >Productos</Link>
      <Link href="/laboratorio" className={estilo.navBtn} >Laboratorio</Link>
      <Link href="/login" className={estilo.navBtn} >Inicio</Link>
      <Link href="/registro" className={estilo.navBtn} >Registrate</Link>
    </nav>
    <p>logo, enlaces de navegacion (inicio, producto, login, registro)</p>
    </header>
  );
}

export default Header;
