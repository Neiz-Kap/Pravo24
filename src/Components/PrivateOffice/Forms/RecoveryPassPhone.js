import React from "react";
import '../PersonalAreaContent.css';
import { 
    Container,
    Row,
    Col,
    Breadcrumb,
    Form,
    Button, } from 'react-bootstrap';
import { Link } from "react-router-dom";

// import {rus_flag} from '../../Image/PersonalAreaContent/rus-flag.svg'
// import {ua_flag} from '../../Image/PersonalAreaContent/ua-flag.svg'

const RecoveryPassPhone = () => (
    <main className="background--color-light-blackhaze">
        <section>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <Form.Group className="min-content">
                            <h1 className="office-title">Восстановление&nbsp;пароля</h1>
                            <p className="enter-the-number px-3">Пожалуйста, введите ваш номер телефона</p>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form className="my-5 background--color-light-blackhaze" action="/recoveryCode">
                            <Form.Label>Введите ваш номер телефона</Form.Label>
                            <Form.Group className="d-flex justify-content-start">
                                <Form.Control as="select" className="dropdown-list">
                                    <option value="+7">+7</option>
                                    <option value="+380">+380</option>
                                </Form.Control>
                                <Form.Control className="phone-number" type="text" placeholder="000-0000"/>
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center register">
                                <Button className="button-enter No-account1">
                                    Подтвердить
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col className="d-none d-lg-block"></Col>
                </Row>
            </Container>
        </section>
    </main>
);

export default RecoveryPassPhone;