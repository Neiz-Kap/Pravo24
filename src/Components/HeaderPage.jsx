import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderPage.css';

export default function HeaderPage() {
    return (
        <header>
            <div className="sticky-top">
                <Container fluid>
                    <Navbar aria-controls="responsive-navbar" className="d-flex justify-content-between" id="navbar" collapseOnSelect expand="lg">
                        {/* Logo */}
                        {/* <Nav.Item className="w-100 d-flex justify-content-between"> */}
                            <Navbar.Brand className="mr-5">
                                <Nav.Link>
                                    {/* <Link to="/">Miura.pro</Link> */}
                                    <Link to="/" className="header-logo"></Link>
                                </Nav.Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar" />
                        {/* </Nav.Item> */}

                        {/* Navigation */}
                        <Navbar.Collapse className="header-nav">
                            <Nav className="w-100 justify-content-between">
                                <Nav.Link className="header-nav-link black text-uppercase">
                                    <Link to="/company" className="black">Компания</Link>
                                </Nav.Link>
                                <Nav.Link className="header-nav-link black text-uppercase">
                                    <Link to="/services" className="black">Услуги</Link>
                                </Nav.Link>
                                <Nav.Link className="header-nav-link black text-uppercase">
                                    <Link to="/contacts" className="black">Контакты</Link>
                                </Nav.Link>
                                <Nav.Link className="header-nav-link black text-uppercase">
                                    <Link to="/partners" className="black">Партнёры</Link>
                                </Nav.Link>
                                <Nav.Link className="header-nav-link black text-uppercase">
                                    <Link to="/personal-area" className="black">Личный кабинет</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="header-right">
                            <Nav.Item className="d-flex justify-content-between">
                                <p className="header__tel">+7(495)597-97-94</p>
                                <p className="header-nav-link ml-5 mb-0 text-uppercase">Москва</p>
                            </Nav.Item>
                            <Nav.Item>
                                <Button className="btn-warning header-btn text-uppercase" variant="primary">Заказать звонок</Button>
                            </Nav.Item>
                        </Navbar.Collapse>

                    </Navbar>
                </Container>
            </div>
        </header>
    );
}
