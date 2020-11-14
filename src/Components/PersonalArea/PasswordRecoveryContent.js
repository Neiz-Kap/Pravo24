import React from "react";
import './PersonalAreaContent.css';
import { Card, Nav, Button, Form, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const PasswordRecoveryContent = () => (


<section className="dropdown1">
        <Container className="d-flex justify-content-between block-recovery">
            <Card className="all-unit1">
                <h1 className="Personal">Восстановление пароля</h1>
                <p className="enter-the-number password-recovery">Пожалуйста,введите ваш номер телефона</p>
            </Card>
                <Card className="dropdown2">
                    <label>Введите ваш номер телефона</label>
                    <div className="d-flex justify-content-start">
                        <select>
                            <option className="dropdown-str" value="Rus">Rus +7</option>
                            <option className="dropdown-str" value="Uk">Uk +380</option>
                        </select>
                        <input className="phone-number" type="" placeholder="000-0000"/>
                    </div>
                    <div className="d-flex justify-content-center register">
                        <button className="button-enter">
                        <Link className="No-account1" to="/code" >
                        Подтвердить
                        </Link>
                        </button>
                    </div>
                </Card>
        </Container>
    </section>

);