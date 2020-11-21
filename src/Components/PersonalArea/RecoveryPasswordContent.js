import React from "react";
import './PersonalAreaContent.css';
import { Card, Nav, Button, Form, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const RecoveryPasswordContent = () => (
    <main>
        <section className="dropdown1">
            <Container className="d-flex justify-content-between block-recovery">
                <Card className="all-unit1">
                    <h1 className="Personal">Восстановление пароля</h1>
                    <p className="enter-the-number password-recovery">Пожалуйста, введите новый пароль и подтвердите его</p>
                </Card>
                    <Form className="dropdown2">
                        <Form.Group>
                            <Form.Label>Введите новый пароль</Form.Label>
                            <div className="d-flex justify-content-start enter-the-password">
                                <input className="Password" type=""  placeholder=""/>
                            </div>
                        </Form.Group>
                        <label>Повторите пароль</label>
                        <div className="d-flex justify-content-start ">
                            <input className="Password" type=""  placeholder=""/>
                        </div>
                        <div className="d-flex d-flex justify-content-between register">
                            <button className="button-enter">
                                <Link className="No-account1" to="/personalArea" >
                                    Подтвердить
                                </Link>
                            </button>
                        </div>
                    </Form>
            </Container>
        </section>
    </main>
);