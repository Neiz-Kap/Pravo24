import React from "react";
import './PersonalAreaContent.css';
import { Card, Nav, Button, Form, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const RecoveryPasswordContent = () => (

<section className="dropdown1">
        <Container className="d-flex justify-content-between block-recovery">
            <Card className="all-unit1">
                <h1 className="Personal">Восстановление пароля</h1>
                <p className="enter-the-number password-recovery">Пожалуйста, введите новый пароль и подтвердите его</p>
            </Card>
                <Card className="dropdown2">
                    <label>Введите новый пароль</label>
                    <div className="d-flex justify-content-start enter-the-password">
                        <input className="Password" type=""  placeholder=""/>
                    </div>
                    <label>Повторите пароль</label>
                    <div className="d-flex justify-content-start ">
                        <input className="Password" type=""  placeholder=""/>
                    </div>
                    <div className="d-flex d-flex justify-content-between register">
                        <button className="button-enter">
                            <Link className="No-account1" to="/personal-area" >
                                Подтвердить
                            </Link>
                        </button>
                    </div>
                </Card>
        </Container>
    </section>

);