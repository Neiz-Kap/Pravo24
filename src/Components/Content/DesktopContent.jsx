import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './DesktopContent.css';
import desktop_background from '../../Image/desctopContent/desktop-background.jpg'
import bank from '../../Image/desctopContent/bank.svg'
import achievement from '../../Image/desctopContent/achievement.svg'
import people from '../../Image/desctopContent/people.svg'

export const DesktopContent = () => (
    <main>
        <section className="h-100vh">
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
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </main>
)