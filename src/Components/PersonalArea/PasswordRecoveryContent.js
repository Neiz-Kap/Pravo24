import React from "react";
import './PersonalAreaContent.css';
import { Card, Nav, Button, Form, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";

import {rus_flag} from '../../Image/PersonalAreaContent/rus-flag.svg'
import {ua_flag} from '../../Image/PersonalAreaContent/ua-flag.svg'

export const PasswordRecoveryContent = () => (
    <main>
        <section className="dropdown1">
            <Container className="d-flex justify-content-between block-recovery">
                <Card className="all-unit1">
                    <h1 className="Personal">Восстановление пароля</h1>
                    <p className="enter-the-number password-recovery">Пожалуйста,введите ваш номер телефона</p>
                </Card>
                    <Form className="dropdown2" action="/code">
                        <Form.Label>Введите ваш номер телефона</Form.Label>
                        <Form.Group className="d-flex justify-content-start">
                            <select>
                                <option className="dropdown-str" value="+7">+7</option>
                                <option className="dropdown-str" value="+380">+380</option>
                            </select>
                            <Form.Control className="phone-number" type="" placeholder="000-0000"/>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center register">
                            <Button className="button-enter No-account1">
                                Подтвердить
                            </Button>
                        </Form.Group>
                    </Form>
            </Container>
        </section>
    </main>
);