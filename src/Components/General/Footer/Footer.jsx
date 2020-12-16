import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import youtube from "../../../Image/footer/youtube.svg";
import facebook from "../../../Image/footer/facebook.svg";
import instagram from "../../../Image/footer/instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-background">
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          className="footer-size" /*bg="dark" variant="dark"*/
        >
          {/* <Navbar.Toggle aria-controls="responsive-navbar" /> */}
          {/* <Navbar.Collapse> */}
          <Row className="w-100 justify-content-between">
            <Col>
              <Nav className="">
                <Nav.Item>
                  {/* <Link > */}
                  <Nav.Link className="">
                    <Link to="/company">Компания</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/services">Услуги</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/contacts">Контакты</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/personalArea">Личный кабинет</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/partners">Партнеры</Link>
                  </Nav.Link>
                  <p className="footers-info">
                    Политика конфиденциальности <br /> Cookie Policy
                  </p>
                  <p className="Gray">© 2012—2020 Все права защищены</p>
                </Nav.Item>
                {/* <Nav.Link>       */}
                {/* <Link > */}
                {/* </Nav.Link> */}
                {/* <Nav.Link> */}
                {/* <Link > */}

                {/* </Nav.Link> */}
                {/* <Nav.Link> */}
                {/* <Link to="/contacts"> */}
                {/* </Nav.Link> */}
              </Nav>
            </Col>
            <Col className="d-flex justify-content-end">
              <div className="footer-nav__right">
                <div className="d-flex justify-content-between social-icons">
                  <img className="fa-youtube" src={youtube} alt="youtube" />
                  <img className="fa-facebook" src={facebook} alt="facebook" />
                  <img
                    className="fa-instagram"
                    src={instagram}
                    alt="instagram"
                  />
                </div>
                <p className="footer-nav__right-description">
                  Данный сайт имеет исключительно информационное значение, не
                  предназначен и не должен трактоваться как реклама юридических
                  или иных услуг.
                </p>
                <p className="ml-auto company">
                  This site is made by Miura.pro
                </p>
              </div>
            </Col>
          </Row>

          {/* <Nav>
            <Button className="btn-warning" variant="primary" >Заказать звонок</Button>
        </Nav> */}

          {/* </Navbar.Collapse> */}
        </Navbar>
      </Container>
    </footer>
  );
};

export default Footer;
