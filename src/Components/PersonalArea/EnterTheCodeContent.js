import React from "react";
import './PersonalAreaContent.css';
import { Card, Nav, Button, Form, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const EnterTheCodeContent = () => (
    <main>
        <section className="dropdown1">
            <Container className="d-flex justify-content-between block-recovery">
                <Card className="all-unit1">
                    <h1 className="Personal">Восстановление пароля</h1>
                    <p className="enter-the-number password-recovery">Пожалуйста,введите код отправленный на ваш номер</p>
                </Card>
                <Form className="dropdown2">
                    <Form.Group>
                        <Form.Label>Введите код</Form.Label>
                        <Form.Control className="Password" type=""  placeholder=""/>
                    </Form.Group>
                    <Form.Group>
                        <div className="d-flex d-flex justify-content-between register">
                            <Button className="button-to-send">
                                <Link className="No-account1" to="/recovery" >
                                Отправить повторно 
                                </Link>
                            </Button>
                            <Button className="button-enter No-account1">
                                <Link to="/recopass">Подтвердить</Link>
                            </Button>
                        </div>
                        <Link className="No-account d-flex justify-content-center" to="/recovery" >
                            Не приходит код?
                        </Link>
                    </Form.Group>
                </Form>
            </Container>
        </section>
    </main>
);