import React from "react";
import './PersonalAreaContent.css';
import { Card, Nav, Button,  Col, Row, Form, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";



export const PersonalAreaContent = () => {
    return(
        <main className="enter">
            {/* Вход */}
            <Container className="d-flex justify-content-between block-enter">
                <Card className="all-unit">
                    <h1 className="Personal">Вход в личный кабинет</h1>
                    <p className="enter-the-number">Пожалуйста,введите свой номер телефона и пароль</p>
                </Card>
                <Card className="entry-block">
                    <Card className="dropdown">
                        <label>Номер телефона</label>
                        <div className="d-flex justify-content-start dropdown">
                        <select className="dropdown-list">
                            <option value="grapefruit"> Rus +7</option>
                            <option value="lime"> Uk +380</option>
                        </select>
                        <input className="phone-number" type="" id="exampleInputPassword1"  placeholder="000-0000"/>
                        </div>
                    </Card>
                    <Card className="InputPassword1 dropdown">
                        <label>Пароль</label>
                        <input className="Password" type="Password" id="exampleInputPassword1"  placeholder=""/>
                    </Card>
                    <Card className="dropdown">
                        <div className="d-flex justify-content-start">
                            <div className="d-flex p-2">
                                <div className="d-flex remem-tick">
                                <p className="remember" >Запомните меня</p>
                                <Form.Check className="tick" type="checkbox"/>
                                </div>
                                <div className="remember-tick" />
                            </div>
                            <button className="button-enter">
                            <Link className="No-account1" to="/">
                                Войти
                            </Link>
                            </button>
                        </div>
                    </Card>
                    <Card className="d-flex justify-content-center Forget-account dropdown">
                        <Nav.Link>
                        <Link className="Forget-password" to="/recovery">
                            Забыли пароль?
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link className="No-account" to="/password" >
                            Нет аккаунта?
                        </Link>
                        </Nav.Link>
                    </Card>
                </Card>
            </Container>
        </main>
    );
}
