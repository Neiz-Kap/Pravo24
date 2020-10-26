import React from 'react';
import './DesktopContent.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import desktop_background from '../../Image/desctopContent/desktop-background.jpg'
import build from '../../Image/desctopContent/building.svg'
import medal from '../../Image/desctopContent/medal.svg'
import people from '../../Image/desctopContent/people.svg'

export const DesktopContent = () => (
    <main>
        <section className="h-100vh">
            <Card className="text-white h-100">
                <Card.Img src={desktop_background} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Body className="position-relative w-100 h-100">
                        <Card.Body className="h-100 d-flex flex-column align-items-center justify-content-center">
                            <Card.Title className="text-center">ЮРИСТЫ</Card.Title>
                            <Button variant="warning">Бесплатная консультация</Button>
                        </Card.Body>
                        <Row className="position-absolute fixed-bottom desktop-content-table">
                            <Col className="desktop-content-table__item">
                                <div>
                                    <div className="col__item-top">
                                        <span>7</span>
                                        <img src={medal} alt="icon svg" />
                                    </div>
                                    <div className="col__item-bottom">
                                        <span>лет опыта</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="desktop-content-table__item">
                                <div>
                                    <div className="col__item-top">
                                        <span>720</span>
                                        <img src={people} alt="icon svg" />
                                    </div>
                                    <div className="col__item-bottom">
                                        <span>клиентов</span>
                                    </div>
                                </div>
                            </Col>
                            <Col className="desktop-content-table__item">
                                <div>
                                    <div className="col__item-top">
                                        <span>100</span>
                                        <img src={build} alt="icon svg" />
                                    </div>
                                    <div className="col__item-bottom">
                                        <span>банков-партнёров</span>
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