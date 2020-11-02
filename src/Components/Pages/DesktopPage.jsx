import React from 'react';
import { Card, Button, Row, Col, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DesktopPage.css';
import desktop_background from '../../Image/desctopPage/desktop-background.jpg';
import bank from '../../Image/desctopPage/bank.svg';
import achievement from '../../Image/desctopPage/achievement.svg';
import people from '../../Image/desctopPage/people.svg';

import services_icon_1 from '../../Image/services/services_icon (1).svg';
import services_icon_2 from '../../Image/services/services_icon (2).svg';
import services_icon_3 from '../../Image/services/services_icon (3).svg';
import services_icon_4 from '../../Image/services/services_icon (4).svg';
import services_icon_5 from '../../Image/services/services_icon (5).svg';
import services_icon_6 from '../../Image/services/services_icon (6).svg';

import video from '../../Image/desctopPage/video.png';
import youtube_icon from '../../Image/desctopPage/youtube-icon.svg';

import main_news from '../../Image/desctopPage/main_news.png';
import news_1 from '../../Image/desctopPage/news_1.png';
import news_2 from '../../Image/desctopPage/news_2.png';
import news_3 from '../../Image/desctopPage/news_3.png';

import ClientsSection from '../Sections/ClientsSection';
import AwardsSection from '../Sections/AwardsSection';

export const DesktopContent = () => (
    <main>
        <section className="h-100vh-content">
            <Card className="text-white h-100">
                <Card.Img src={desktop_background} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Body className="position-relative w-100 h-100">
                        <Card.Body className="h-100 d-flex flex-column align-items-center justify-content-center">
                            <Card.Title className="text-center">Право24</Card.Title>
                            <Button variant="warning">Бесплатная консультация</Button>
                        </Card.Body>
                        <Row className="position-absolute fixed-bottom desktop-content-table">
                            <Col className="desktop-content-table__item">
                                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                                    <div className="desktop-col__item-top d-flex align-items-center">
                                        <span className="desktop-col__number">7</span>
                                        <img src={achievement} alt="icon svg" />
                                    </div>
                                    <div className="col__item-bottom">
                                        <span className="desktop-col__text">лет опыта</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="desktop-content-table__item">
                                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                                    <div className="desktop-col__item-top d-flex align-items-center">
                                        <span className="desktop-col__number">720</span>
                                        <img src={people} alt="icon svg" />
                                    </div>
                                    <div className="desktop-col__item-bottom">
                                        <span className="desktop-col__text">клиентов</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="desktop-content-table__item">
                                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                                    <div className="desktop-col__item-top d-flex align-items-center">
                                        <span className="desktop-col__number">100</span>
                                        <img src={bank} alt="icon svg" />
                                    </div>
                                    <div className="col__item-bottom">
                                        <span className="desktop-col__text">банков-партнёров</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </section>
        <section className="background--color-blackhaze pv-27px">
            <Container>
                <h2 className="content__title--color-satingold mx-auto text-center">Наши услуги</h2>
                {/* .services-block>.services__item*6>img.services-icon[src={services_icon_$}]+h3.services-block__description+Link[to]{Подробнее} */}
                <div className="services-block">
                    <div className="services__item d-flex flex-column align-items-center">
                        <img src={services_icon_1} alt="" className="services-icon" />
                        <h3 className="services-block__description">Заявление о&nbsp;расторжении брака в&nbsp;судебном порядке</h3>
                        <Link to="" className="services__item-link">Подробнее</Link>
                    </div>
                    <div className="services__item d-flex flex-column align-items-center">
                        <img src={services_icon_2} alt="" className="services-icon" />
                        <h3 className="services-block__description">Заявление на&nbsp;выдачу судебного приказа на&nbsp;взыскание алиментов на&nbsp;содержание детей</h3>
                        <Link to="" className="services__item-link">Подробнее</Link>
                    </div>
                    <div className="services__item d-flex flex-column align-items-center">
                        <img src={services_icon_3} alt="" className="services-icon" />
                        <h3 className="services-block__description">Заявление об&nbsp;установлении факта принятия наследства</h3>
                        <Link to="" className="services__item-link">Подробнее</Link>
                    </div>
                    <div className="services__item d-flex flex-column align-items-center">
                        <img src={services_icon_4} alt="" className="services-icon" />
                        <h3 className="services-block__description">Разработка проекта договора</h3>
                        <Link to="" className="services__item-link">Подробнее</Link>
                    </div>
                    <div className="services__item d-flex flex-column align-items-center">
                        <img src={services_icon_5} alt="" className="services-icon" />
                        <h3 className="services-block__description">Подготовка претензий</h3>
                        <Link to="" className="services__item-link">Подробнее</Link>
                    </div>
                    <div className="services__item d-flex flex-column align-items-center">
                        <img src={services_icon_6} alt="" className="services-icon" />
                        <h3 className="services-block__description">Ведение договорной работы</h3>
                        <Link to="" className="services__item-link">Подробнее</Link>
                    </div>
                </div>
            </Container>
        </section>
        <ClientsSection />
        <section>
            <h2 className="content__title--color-satingold mx-auto text-center">Видео</h2>
            {/* .video-block>video.video+.video-info>h3.video__title+p.video-description+Link[to=""]>img.video_link-icon+p.video_link-text */}
            <div className="video-block">
                <video src="" className="video"></video>
                <div className="video-info">
                    <h3 className="video__title">О компании</h3>
                    <p className="video-description">
                        SBSB&nbsp;&mdash; одна из&nbsp;сильнейших юридических фирм в&nbsp;СНГ и&nbsp;Европе, консультирующая по&nbsp;вопросам в&nbsp;области FinTech. Мы&nbsp;углубленно занимаемся двумя направлениями: FinTech и&nbsp;налоговое право. Это позволяет нашей команде быть квалифицированными и&nbsp;опытными специалистами именно в&nbsp;этих сферах.
                    </p>
                    <Link to="">
                        <img src={youtube_icon} alt="" className="video_link-icon" />
                        <p className="video_link-text"></p>
                    </Link>
                </div>
            </div>
        </section>
        <section className="background--color-blackhaze">
            <Container>
                <h2 className="content__title--color-satingold mx-auto text-center">Новости</h2>
                {/* .news>.news-list>.news-list__item*3>img.news-list__item-img+p.news-list__item-text^^.news-main>.news-main-description */}
                <div className="news mt-5 d-flex justify-content-between">
                    <div className="news-list mr-4">
                        <div className="news-list__item d-flex align-items-center">
                            <Image src={news_1} className="news-list__item-img mr-4"/>
                            <p className="news-list__item-text">В США появится первый криптобанк</p>
                        </div>
                        <div className="news-list__item d-flex align-items-center">
                            <Image src={news_2} className="news-list__item-img mr-4"/>
                            <p className="news-list__item-text">PISP и AISP: новые возможности для необанков? </p>
                        </div>
                        <div className="news-list__item d-flex align-items-center">
                            <Image src={news_3} className="news-list__item-img mr-4"/>
                            <p className="news-list__item-text">Онлайн-сессия CEO SBSB</p>
                        </div>
                    </div>
                    <div className="news-main">
                        <Image src={main_news}/>
                        <div className="news-main-description"></div>
                    </div>
                </div>
            </Container>
        </section>
        <AwardsSection />
    </main>
)