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
    <main>
        <section className="dropdown1">
            <Container>
                <Row>
                    <Col>
                        <Form.Group className="all-unit1">
                            <h1 className="Personal">Восстановление пароля</h1>
                            <p className="enter-the-number password-recovery">Пожалуйста,введите код отправленный на ваш номер</p>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form className="dropdown2">
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
                    <Col className="col--number-third"></Col>
                </Row>
            </Container>
        </section>
    </main>
);

export default RecoveryPassCode;