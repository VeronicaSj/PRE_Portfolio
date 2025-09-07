// App.tsx
import Navbar from "./components/Navbar";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Carrera from "./components/Carrera";
import Educacion from "./components/Educacion";
import Contacto from "./components/Contacto";
import Skills from "./components/Skills";


// App.tsx
export default function App() {
  return (
    <main className="min-h-screen bg-app text-app transition-colors">
      <Navbar />
      <SobreMi />
      <Skills />
      <Educacion />
      <Carrera />
      <Proyectos />
      <Contacto />
    </main>
  );
}
