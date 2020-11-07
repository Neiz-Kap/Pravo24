import React from "react";
import './PersonalAreaContent.css';
import { Card, Nav, Button, Form, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const EnterTheCodeContent = () => (

<section className="dropdown1">
        <Container className="d-flex justify-content-between block-recovery">
            <Card className="all-unit1">
                <h1 className="Personal">Восстановление пароля</h1>
                <p className="enter-the-number password-recovery">Пожалуйста,введите код отправленный на ваш номер</p>
            </Card>
                <Card className="dropdown2">
                    <label>Введите код</label>
                    <div className="d-flex justify-content-start">
                        <input className="Password" type=""  placeholder=""/>
                    </div>
                    <div className="d-flex d-flex justify-content-between register">
                        <button className="button-to-send">
                            <Link className="No-account1" to="/" >
                            Отправить повторно 
                            </Link>
                        </button>
                        <button className="button-enter">
                            <Link className="No-account1" to="/recopass" >
                                Подтвердить
                            </Link>
                        </button>
                    </div>
                    <Link className="No-account d-flex justify-content-center" to="/recovery" >
                        Не приходит код ?
                    </Link>
                </Card>
        </Container>
    </section>

);