//importa tipografia
//import { Inter } from "next/font/google";
import "./estaticos/estilos/globales.css"; //importa css
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import {Anton} from "next/font/google"

const Antonia = Anton({subsets:["latin"], weight:["400"]})

//const inter = Inter({ subsets: ["latin"] }); //setear/inciar tipografia

//metadata para el navegador
export const metadata = {
  title: "First Ecommerce",
  description: "Mi primer comercio",
};

//componente de reaact comun que espera el prop children
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={Antonia.className} >
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
    </html>
  );
}
