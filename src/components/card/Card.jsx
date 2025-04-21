import { Col, Row } from "react-bootstrap";
import "./card.css";
import { RiCellphoneFill, RiOrganizationChart, RiRemoteControl2Line} from "react-icons/ri";
import { FaPaperPlane, FaDirections  } from "react-icons/fa";
import { GrIntegration } from "react-icons/gr";

const Card = () => {
  return (
    <Row className="rowCard justify-content-center ">
      <Col xs={12} md={6} lg={6} xl={4}>
        <div className="cardContainer">
          <div className="logoContainer">
            <FaPaperPlane className="logo" />
          </div>

          <h2>Planificar</h2>
          <p>
            Permite definir objetivos, estrategias y recursos para implementar
            tecnologías como sensores, software de gestión, etc. Una buena
            planificación asegura que la tecnología se aplique correctamente al
            entorno agrícola.
          </p>
        </div>
      </Col>

      <Col xs={12} md={6} lg={6} xl={4}>
        <div className="cardContainer">
          <div className="logoContainer">
            <RiOrganizationChart className="logo" />
          </div>

          <h2>Organizar</h2>
          <p>
            Es crucial para verificar que lo planificado se esté cumpliendo. En
            AGROTIC, esto implica monitorear datos en tiempo real (clima, suelo,
            riego, producción), validar que los sistemas funcionan bien y hacer
            ajustes si es necesario.
          </p>
        </div>
      </Col>

      <Col xs={12} md={6} lg={6} xl={4}>
        <div className="cardContainer">
          <div className="logoContainer">
            <FaDirections className="logo" />
          </div>

          <h2>Dirigir</h2>
          <p>
            Función clave para guiar y motivar al equipo humano en la adopción
            de tecnología. En AGROTIC, dirigir implica liderar a personas que
            muchas veces no están familiarizadas con las TIC. Se necesita una
            buena comunicación, empatía y liderazgo para que todos comprendan el
            propósito del cambio y se comprometan con él.
          </p>
        </div>
      </Col>

      <Col xs={12} md={6} lg={6} xl={4}>
        <div className="cardContainer">
          <div className="logoContainer">
            <GrIntegration className="logo" />
          </div>

          <h2>Integrar</h2>
          <p>
            Función esencial para que personas, procesos y tecnologías trabajen
            como un sistema único. En AGROTIC, integrar significa hacer que lo
            nuevo (tecnología) se complemente con lo existente (saberes y
            prácticas tradicionales), evitando el rechazo o la desconexión entre
            herramientas y personas.
          </p>
        </div>
      </Col>

      <Col xs={12} md={6} lg={6} xl={4}>
        <div className="cardContainer">
          <div className="logoContainer">
            <RiRemoteControl2Line className="logo" />
          </div>

          <h2>Controlar</h2>
          <p>
            Es crucial para verificar que lo planificado se esté cumpliendo. En
            AGROTIC, esto implica monitorear datos en tiempo real (clima, suelo,
            riego, producción), validar que los sistemas funcionan bien y hacer
            ajustes si es necesario.
          </p>
        </div>
      </Col>

     
    </Row>
  );
};

export default Card;
