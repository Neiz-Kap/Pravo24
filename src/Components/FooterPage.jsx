import React from 'react';
import { Navbar, Nav, Link, Button, Container } from 'react-bootstrap';
import youtube from '../Image/footer/youtube.svg'
import facebook from '../Image/footer/facebook.svg'
import instagram from '../Image/footer/instagram.svg'

// import {BG_Footer} from '../Image/footer/footer-background.jpg'

import './FooterPage.css';



function FooterPage() {
    return (
        <>
            <footer className="footer-background">
                <Container>
                    <Navbar collapseOnSelect expand="lg" className="footer-size" /*bg="dark" variant="dark"*/>

                        {/* <Navbar.Toggle aria-controls="responsive-navbar" /> */}
                        {/* <Navbar.Collapse> */}
                        <Nav className="mr-auto">
                            <Nav.Link>
                                {/* <Link to="/company"> */}
                                <p>Компания</p>
                                <p>Услуги</p>
                                <p>Контакты</p>
                                <p>Публикации</p>
                                <p>Политика конфиденциальности</p>
                                <p>Cookie Policy</p>
                                <p>© 2012—2020 Все права защищены</p>


                            </Nav.Link>
                            <Nav.Link>
                                {/* <Link to="/services"> */}
                                <p>FAQ</p>
                            </Nav.Link>
                            {/* <Nav.Link> */}
                            {/* <Link to="/contacts"> */}

                            {/* </Nav.Link> */}
                            {/* <Nav.Link> */}
                            {/* <Link to="/contacts"> */}
                            {/* </Nav.Link> */}

                        </Nav>
                        {/* <Nav>
                            <Button className="btn-warning" variant="primary" >Заказать звонок</Button>
                        </Nav> */}

                        <img src={youtube} alt="youtube" />
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        {/* </Navbar.Collapse> */}
                    </Navbar>
                </Container>
            </footer>

            {/* <footer class="footer-w">
        <div class="max_width">
            <div class="footer__left">
                <div class="left__menu">
                    <div>
                        <a href="/company/">Компания</a>
                        <a href="/our_services/">Услуги</a>
                        <a
                            href="/parthners/">Партнеры</a>
                            <a href="/publications/">Публикации</a>
                            </div>
                    <div>
                        <a href="/faq/">FAQ</a><a href="/contacts/">Контакты</a>
                    </div>
                </div>
                <div class="left__gdpr" style="margin-top: 25px"><a href="/privacy/">Политика конфиденциальности</a>
                </div>
                <div class="left__cookies" style="margin-top: 5px"><a href="/cookie/">Cookie policy</a></div>
                <div class="left__copyright">© 2012—2020 «SBSB» Все права защищены</div>
            </div>
            <div class="footer__right">
                <div class="right__socials">
                    <a href="https://www.youtube.com/channel/UC0y558Xg15AsQYvlc-z7HLw/" class="socials__item m_youtube"
                        rel="nofollow">
                        <img src="/i/company/youtube.png" />
                    </a>
                    <a href="https://www.facebook.com/SBSB.Business/" class="socials__item m_facebook" rel="nofollow">
                        <img src="/i/company/facebook.png" />
                    </a>
                    <a href="https://www.linkedin.com/company/sbsb/about/" class="socials__item m_in" rel="nofollow">
                        <img src="/i/company/in.png" />
                    </a>
                </div>
                <div class="right__disclaimer">
                    <a href="/disclaimer/">Данный сайт имеет исключительно <br />информационное
                        значение, не предназначен <br />и не должен трактоваться как реклама <br />юридических или иных
                        услуг.</a>
                </div>
                <div class="right__design">this site is made by<br />
                    <a href="https://dudka.agency/" target="_blank" rel="nofollow">Dudka Agency</a>
                </div>
            </div>
        </div>
    </footer> */}
    </>
    );
}

export default FooterPage;