import React from 'react';
import { Container, Row, Col, Form, Card, Breadcrumb } from 'react-bootstrap';

function Chats() {
    return (
        <main>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <Breadcrumb.Item className="content-link black" href="/">Главная</Breadcrumb.Item>
                                <Breadcrumb.Item className="content-link" active>Контакты</Breadcrumb.Item>
                            </Breadcrumb>
                            <Card>
                                <h1 className="Personal office-title">Личный кабинет</h1>
                            </Card>
                        </Col>
                        <Col>
                            <div className="chats-contancts">
                                <Form.Control />
                                <div className="chats-contacts-list">
                                    <Row className="chats-contacts-list__item">
                                        <Col className="chats-contacts-list__item-information">
                                            <div className="logo">
                                                <div className="status-network"></div>
                                            </div>
                                            <div className="text-information">
                                                <h3>{}</h3>
                                                <p>{}</p>
                                            </div>
                                        </Col>
                                        <Col className="chats-contacts-list__item-information">
                                            <div className="last-time-status-network"></div>
                                            <div className="number-messages"></div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default Chats;
