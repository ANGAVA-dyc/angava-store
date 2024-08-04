import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="prueba">
        <h1 className="textoRojo"> Hola Mundo! Esto es una prueba</h1>
        <Image
          src="https://images.unsplash.com/photo-1472053092455-ee16a8b358b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
          width={200}
          height={200}
          alt="Pollito"></Image>
      </div>
      <div className="hero">
        <p>Imagen destacada del producto</p>
        <p>llamado a la accion</p>
      </div>
      <div className="caracteristicas">
        <p>Breve descripcion del producto</p>
      </div>
      <div className="ventajas">
        <p>ventajas del producto</p>
      </div>
    </main>
  );
}
