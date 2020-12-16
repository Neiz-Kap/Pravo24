import React from "react";
import '../PersonalAreaContent.css';
import {
    Container,
    Row,
    Col,
    Nav,
    Form,
    Button
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

const ResetPassword = () => (
    <main className="background--color-light-blackhaze">
        <section>
            <Container>
                <Row className="mt-3">
                    <Col>
                        <Form.Group className="min-content">
                            <h1 className="office-title">Восстановление&nbsp;пароля</h1>
                            <p className="enter-the-number px-5">Пожалуйста, введите новый пароль и подтвердите его</p>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form className="my-5 background--color-light-blackhaze" action="/personalArea">
                            <Form.Group>
                                <Form.Label>Введите новый пароль</Form.Label>
                                <Form.Control className="Password enter-the-password" type="password"  placeholder=""/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Повторите пароль</Form.Label>
                                <Form.Control className="Password" type="password"  placeholder=""/>
                            </Form.Group>
                            <Button type="submit" className="button-enter No-account1 register">
                                    Подтвердить
                            </Button>
                        </Form>
                    </Col>
                    <Col className="d-none d-lg-block"></Col>
                </Row>
            </Container>
        </section>
    </main>
);

export default ResetPassword;