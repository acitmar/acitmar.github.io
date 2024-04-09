import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function NavBarAcitmar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showMision, setShowMision] = useState(false);

  const handleCloseMision = () => setShowMision(false);
  const handleShowMision = () => setShowMision(true);

  const [showVision, setShowVision] = useState(false);

  const handleCloseVision = () => setShowVision(false);
  const handleShowVision = () => setShowVision(true);


  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" className="Nav-Border">
      <Container>
        <Navbar.Brand href="/"> 
          <Button variant="success">ACITMAR</Button>{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="light" onClick={handleShow}>¿Quiénes Somos?</Button>
            <Button variant="light" onClick={handleShowMision}>Misión</Button>
            <Button variant="light" onClick={handleShowVision}>Visión</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>¿Quienes Somos?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Somos una Institución fundada en el año 1995, 
            pionera y a la vanguardia de la seguridad, higiene, ambiente, desarrollo personal, 
            formación de paramédico y brigadas tanto infantil como adultos en el área de la salud y 
            prevención.<br/><br/>
            Con amplia trayectoria Nacional e Internacional, liderada por su creadora María Pernil;<br/> 
            Trainer training PNL, Coach ontológico, Coach profesional y Coach organizacional,<br/> 
            actualmente facilitadora oficial de la IANLPAC (Asociancion Internacional de Coaching y PNL) Suiza.<br/><br/>
            Acompañada por un equipo Multidisciplinario especializado en cada una de las áreas.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" onClick={handleClose}>
              ¡Genial!
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showMision} onHide={handleCloseMision}>
          <Modal.Header closeButton>
            <Modal.Title>MISIÓN</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ser una organización líder, en proveer servicios profesionales especializados 
            en el área de Seguridad Industrial, Higiene, Ambiente, Salud Ocupacional,
             Formación de Paramédicos, Desarrollo Personal y Servicios Educativos y 
             Terapéuticos del sector público y privado, orientada a la transformación del Ser 
             y al fomento de una cultura preventiva acordes con la evolución tecnológica, 
             científica, administrativa y normativa, que permitan el desarrollo del individuo 
             de una manera integral.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseMision}>
              Cerrar
            </Button>
            <Button variant="success" onClick={handleCloseMision}>
              ¡Genial!
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showVision} onHide={handleCloseVision}>
          <Modal.Header closeButton>
            <Modal.Title>VISIÓN</Modal.Title>
          </Modal.Header>
          <Modal.Body>Ser reconocidos como una entidad de servicio profesional dirigida a preservar 
            la salud biopsicosocial y espiritual del recurso humano mediante la capacitación y desarrollo
             especializado en materia de Prevención, Salud, Seguridad, Ambiente y Desarrollo Personal, 
             a fin de contribuir al logro de objetivos tanto individuales como organizacionales, 
             proporcionando un óptimo equilibrio.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseVision}>
              Cerrar
            </Button>
            <Button variant="success" onClick={handleCloseVision}>
              ¡Genial!
            </Button>
          </Modal.Footer>
        </Modal>

    </>
  );
}




export default NavBarAcitmar;