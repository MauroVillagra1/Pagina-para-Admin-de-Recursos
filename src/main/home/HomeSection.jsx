import logo from "../../../src/assets/logo.png";
import "./homeSection.css";

const HomeSection = () => {
  return (
    <section id="inicio" className="mainContainer">
      <div className="inicio">
        <div className="titleContainer">
          <h1 className="title">
            Soluciones Tecnológicas para Zonas Rurales y Remotas
          </h1>
        </div>

        <div className="imageContainer">
          <img src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1745244273/Tomi%20Waj%20Gay/logo_id9vjw.png" alt="Logo AgroTic Solutions" className="imgInicio" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
