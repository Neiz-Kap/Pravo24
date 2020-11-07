import React from "react";
import './PersonalAreaContent.css';
import { Card, Nav, Button, Form, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";


export const PasswordContent = () => (

<section className="dropdown1">
        <Container className="d-flex justify-content-between block-registrations">
            <Card className="all-unit">
                <h1 className="Personal">Создание аккаунта</h1>
                <p className="enter-the-number">Пожалуйста, заполните поля для регистрации</p>
            </Card>
            <Card className="entry-block">
                <Card className="InputPassword1 dropdown">
                    <label>Имя</label>
                    <input className="Password" type=""  placeholder=""/>
                </Card>
                <Card className="InputPassword1 dropdown">
                    <label>Отчество</label>
                    <input className="Password" type=""  placeholder=""/>
                </Card>
                <Card className="InputPassword1 dropdown">
                    <label>Фамилия</label>
                    <input className="Password" type=""  placeholder=""/>
                </Card>
                <Card className="InputPassword1 dropdown">
                    <label>Email(необязательно)</label>
                    <input className="Password" type=""  placeholder=""/>
                </Card>
                <Card className="InputPassword1 dropdown">
                    <label>Пароль</label>
                    <input className="Password" type="Password"  placeholder=""/>
                </Card>
                <Card className="InputPassword1 dropdown">
                    <label>Подтвердите пароль</label>
                    <input className="Password" type="Password"  placeholder=""/>
                </Card>
                <Card className="dropdown">
                    <label>Номер телефона</label>
                    <div className="d-flex justify-content-start">
                        <select>
                            <option className="dropdown-str" value="Rus">Rus +7</option>
                            <option className="dropdown-str" value="Uk">Uk +380</option>
                        </select>
                        <input className="phone-number" type="" placeholder="000-0000"/>
                    </div>
                    <div className="d-flex justify-content-center register">
                        <button className="button-enter">
                            <Link className="No-account1" to="/personal-area" >
                                Регистрация
                            </Link>
                        </button>
                    </div>
                </Card>
            </Card>
        </Container>
            
    </section>

);