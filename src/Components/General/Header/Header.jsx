import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

// import header_logo from '../../Image/header/header-logo.svg'
import header_logo from '../../../Image/header/logo.png'

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Navbar aria-controls="responsive-navbar" className="header-navbar d-flex justify-content-between" id="navbar" collapseOnSelect expand="lg">
                    {/* Logo */}
                    {/* <Nav.Item className="w-100 d-flex justify-content-between"> */}
                    <Navbar.Brand className="mr-5">
                        <Nav.Link href="/" className="d-block">
                            {/* <Link to="/">Miura.pro</Link> */}
                            <img src={header_logo} className="header-logo" alt="header logo" />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar" />
                    {/* </Nav.Item> */}

                    {/* Navigation */}
                    <Navbar.Collapse className="header-nav">
                        <Nav className="w-100 justify-content-between align-items-center">
                            <Nav.Link href="/company" className="header-nav-link text-uppercase">
                                <Link to="/company" className="black">Компания</Link>
                            </Nav.Link>
                            <Nav.Link href="/services" className="header-nav-link black text-uppercase">
                                <Link to="/services" className="black">Услуги</Link>
                            </Nav.Link>
                            <Nav.Link href="/contacts" className="header-nav-link black text-uppercase">
                                <Link to="/contacts" className="black">Контакты</Link>
                            </Nav.Link>
                            <Nav.Link href="/partners" className="header-nav-link black text-uppercase">
                                <Link to="/partners" className="black">Партнёры</Link>
                            </Nav.Link>
                            <Nav.Link href="/personalArea" className="header-nav-link black text-uppercase">
                                <Link to="/personalArea" className="black text-center">Личный кабинет</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="header-right">
                        <Nav.Item className="d-flex justify-content-between">
                            <span className="header-nav-link text-uppercase text-center"><a href="tel:+74955979794" className="header__tel">+7(495)597-97-94</a>Москва</span>
                        </Nav.Item>
                        <Nav.Item>
                            <Button className="btn-warning header-btn" variant="primary">Заказать звонок</Button>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
}

export default Header;