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
    <main>
        <section className="dropdown1">
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="all-unit1">
                            <h1 className="Personal">Восстановление пароля</h1>
                            <p className="enter-the-number password-recovery">Пожалуйста, введите новый пароль и подтвердите его</p>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form className="dropdown2" action="/personalArea">
                            <Form.Group>
                                <Form.Label>Введите новый пароль</Form.Label>
                                <Form.Control className="Password enter-the-password" type=""  placeholder=""/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Повторите пароль</Form.Label>
                                <Form.Control className="Password" type=""  placeholder=""/>
                            </Form.Group>
                            <Button type="submit" className="button-enter No-account1 register">
                                    Подтвердить
                            </Button>
                        </Form>
                    </Col>
                    <Col className="col--number-third"></Col>
                </Row>
            </Container>
        </section>
    </main>
);

export default ResetPassword;