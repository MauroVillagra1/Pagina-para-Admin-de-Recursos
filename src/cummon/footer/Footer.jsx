import "./footer.css";
import logo from "../../assets/logo.png";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="d-flex imgContainer flex-column column-footer">
        <a href="#nav">
          <img className="logoImg" src="https://res.cloudinary.com/dol1ba0ld/image/upload/v1745244273/Tomi%20Waj%20Gay/logo_id9vjw.png" alt="" />
        </a>
      </div>
      <div className="d-flex footerTitleContainer flex-column column-footer">
        <h3 className="footerTitle text-center">Empresa</h3>
        <ul className="list-footer footerTitle p-0 text-center">
          <li className="text-center">Sobre Nosotros</li>
          <li>Proyectos</li>
          <li>Contacto</li>
          <div class="click-footer">
          <FaWhatsapp className="logo"/>
          <FaInstagram className="logo"/>
          <FaFacebook className="logo"/>
          <FaTwitter className="logo"/>
          </div>

        </ul>
      </div>
      <div className="d-flex footerTitleContainer flex-column column-footer">
        <h3 className="footerTitle text-center">Legal</h3>
        <ul className="list-footer footerTitle p-0 text-center">
          <li className="text-center">Terminos y Servicios</li>
          <li>Politica de Privacidad</li>
          
        </ul>
      </div>
      <div className="d-flex footerTitleContainer flex-column column-footer">
        <h3 className="footerTitle">Autores</h3>
        <ul className="footerTitle">
          <li>Bonilla Valentina - 49929</li>
          <li>Cazorla Juan Pablo - 53164</li>
          <li>Vera Maia Jazmin - 53876</li>
          <li>Villagra Mauro - 53499</li>
          <li>Wajnerman Tomas - 53505</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
