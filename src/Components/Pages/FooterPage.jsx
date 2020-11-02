import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import youtube from '../../Image/footer/youtube.svg';
import facebook from '../../Image/footer/facebook.svg';
import instagram from '../../Image/footer/instagram.svg';
import './FooterPage.css';



function FooterPage() {
    return (
        <>
            <footer className="footer-background">
                <Container>
                    <Navbar collapseOnSelect expand="lg" className="footer-size d-flex justify-content-between" /*bg="dark" variant="dark"*/>

                        {/* <Navbar.Toggle aria-controls="responsive-navbar" /> */}
                        {/* <Navbar.Collapse> */}
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
                                    <Link to="/personal-area">Личный кабинет</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/partners">Партнеры</Link>
                                </Nav.Link>
                                <p className="Gray" style={{ width: 280, height: 34, }}>Политика конфиденциальности <br /> Cookie Policy</p>
                                <p className="Gray" style={{marginTop: 30}}>© 2012—2020 Все права защищены</p>
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
                        {/* <Nav>
                            <Button className="btn-warning" variant="primary" >Заказать звонок</Button>
                        </Nav> */}
                        <div className="footer-nav__right">
                            <div className="d-flex justify-content-between" style={{ marginBottom: 85 }}>
                                <img src={youtube} style={{ width: 30, height: 30 }} alt="youtube" />
                                <img src={facebook} style={{ marginLeft: 68, width: 30, height: 30 }} alt="facebook" />
                                <img src={instagram} style={{ marginLeft: 68, width: 30, height: 30 }} alt="instagram" />
                            </div>
                            <p className="footer-nav__right-description" >Данный сайт имеет исключительно информационное значение, не предназначен и не должен трактоваться как реклама юридических или иных услуг.</p>
                            <p className="ml-auto" style={{ width: 146, height: 44, textAlign: "right" }}>This site is made by Miura.pro</p>
                        </div>

                        {/* </Navbar.Collapse> */}
                    </Navbar>
                </Container>
            </footer>
        </>
    );
}

export default FooterPage;