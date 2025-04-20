import { FaEye, FaBullseye } from "react-icons/fa";
import './identitySection.css'

const IdentitySection = () => {
    return (
        <section id="misionVision" className="misionContainer">
        <div className="infoBox">
        <FaBullseye className="icon" />
          <h1>Misión</h1>
          <div>
            <p>
              Transformar digitalmente el sector agropecuario del norte
              argentino mediante soluciones tecnológicas accesibles, simples y
              adaptadas a las realidades de los productores locales. Nos
              enfocamos en mejorar la productividad, la sostenibilidad y la toma
              de decisiones, combinando tecnología, conocimiento del territorio
              y acompañamiento personalizado.
            </p>
          </div>
        </div>

        <div className="infoBox">
        <FaEye className="icon"/>
          <h1>Visión</h1>
          <div>
            <p>
              Ser la empresa líder en innovación tecnológica aplicada al agro
              del norte argentino, reconocida por su cercanía con el productor,
              la simplicidad de sus herramientas digitales y su impacto positivo
              en el desarrollo regional.
            </p>
          </div>
        </div>
      
      </section>
    );
};

export default IdentitySection;