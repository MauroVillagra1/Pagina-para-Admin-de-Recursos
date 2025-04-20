import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="imgContainer">
        <a href="#nav">
          <img className="logoImg" src={logo} alt="" />
        </a>
      </div>
      <div className="d-flex align-items-center footerTitleContainer">
        <h2 className="footerTitle">"Conectando el campo con el mañana"</h2>
      </div>
    </footer>
  );
};

export default Footer;
