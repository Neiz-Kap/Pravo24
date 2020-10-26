import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderPage.css';

export default function HeaderPage() {
    return (
        <header>
            <div className="sticky-top">
                <Container fluid>
                    <Navbar aria-controls="responsive-navbar" id="navbar" collapseOnSelect expand="lg">
                        {/* Logo */}
                        <Navbar.Brand className="mr-5">
                            <Nav.Link>
                                <Link to="/" className="black">Miura.pro</Link>
                            </Nav.Link>
                        </Navbar.Brand>
                        {/* Navigation */}
                        <Navbar.Toggle aria-controls="responsive-navbar" />
                        <Navbar.Collapse className="mr-auto">
                            <Nav className="w-100 justify-content-between">
                                <Nav.Link className="description-text black text-uppercase">
                                    <Link to="/company" className="black">Компания</Link>
                                </Nav.Link>
                                <Nav.Link className="description-text black text-uppercase">
                                    <Link to="/services" className="black">Услуги</Link>
                                </Nav.Link>
                                <Nav.Link className="description-text black text-uppercase">
                                    <Link to="/contacts" className="black">Контакты</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav className="align-items-center">
                            <Nav.Item className="ml-5 w-100 d-flex flex-column align-items-center">
                                <p className="description-text orange font-weight-bold">+7(495)597-97-94</p>
                                <Button className="btn-warning header-btn text-uppercase" variant="primary">Заказать звонок</Button>
                            </Nav.Item>
                            <Nav.Item className="header-line"></Nav.Item>
                            <p className="ml-5 mb-0 description-text black text-uppercase">
                                Москва
                            </p>
                            <Nav.Link className="ml-5">
                                <u>
                                    <Link to="/personal-area" className="description-text black">Личный кабинет</Link>
                                </u>
                            </Nav.Link>
                        </Nav>





                        





                        {/* Header right */}
                        {/* <div className="header-right">
                        <div className="header-right-info">
                            <div className="header-right-call">
                                <p className="header-right-tel"></p>
                                
                            
                            </div>
                            <div className="header-right-line"></div>
                            <p className="header-right-address"></p>
                        </div>
                        <div className="header-personal-area">
                            
                        </div>
                    </div> */}
                    </Navbar>
                </Container>
            </div>
        </header>
    );
}
