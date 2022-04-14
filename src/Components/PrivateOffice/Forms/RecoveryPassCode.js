import React from "react";
import '../PersonalAreaContent.css';
import { 
    Container,
    Row,
    Col,
    Form,
    Button, } from 'react-bootstrap';
import { Link } from "react-router-dom";


const RecoveryPassCode = () => (
    <main className="background--color-light-blackhaze">
        <section>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <Form.Group className="min-content">
                            <h1 className="office-title">Восстановление&nbsp;пароля</h1>
                            <p className="enter-the-number px-4">Пожалуйста, введите код отправленный на ваш номер</p>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form className="my-5 background--color-light-blackhaze" action="/resetPassword">
                            <Form.Group>
                                <Form.Label>Введите код</Form.Label>
                                <Form.Control className="Password" type="text"  placeholder=""/>
                            </Form.Group>
                            <Form.Row className="register row--wrap-self">
                                <Col>
                                    <Button className="button-to-send">
                                        <Link className="No-account1" to="/recovery" >
                                        Отправить&nbsp;повторно 
                                        </Link>
                                    </Button>
                                </Col>
                                <Col className="button-separator">
                                    <Button className="button-enter No-account1">
                                        <Link to="/recopass">Подтвердить</Link>
                                    </Button>
                                </Col>
                            </Form.Row>
                            <Link className="No-account d-flex justify-content-center" to="/recovery" >
                                Не приходит код?
                            </Link>
                        </Form>
                    </Col>
                    <Col className="d-none d-lg-block"></Col>
                </Row>
            </Container>
        </section>
    </main>
);

export default RecoveryPassCode;