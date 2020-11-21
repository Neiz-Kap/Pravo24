import React from "react";
import './PersonalAreaContent.css';
import {
    Container,
    Card,
    Button,
    Form
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

import {rus_flag} from '../../Image/PersonalAreaContent/rus-flag.svg'
import {ua_flag} from '../../Image/PersonalAreaContent/ua-flag.svg'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // error: null,
            // isLoaded: false,
            // items: [],

            error: "",
            form: {
                firstName: "",
                lastName: "",
                middleName: "",
                password: "",
                phoneCode: "+7",
                phone: "",
                password_confirm: "",
            },
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    get phoneNumber() {
        return this.state.form.phoneCode + this.state.form.phone;
    }

    loadSignUpData = (event) => {
        event.preventDefault();
        // console.log({ phone_number: this.phoneNumber, ...this.state.form})

        let urlRegister = 'http://pravo.loc/api/register.php';
        fetch(urlRegister, {
            method: 'POST',
            header: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({ phone_number: this.phoneNumber, ...this.state.form}),
        }).then((result) => {
            result.json().then((data) => {
                // Регистрация успешна
                console.log(data);
            })
        }).catch((err) => {
            // {"status": "error", "message": "asddawdawdawasd"}
            console.error(err);
        })
    }

    handleInputChange(event){
        // console.log(`Метод hanldeInputChange() сработал. Result: ${[event.target.name]}:${event.target.value}`);
        const form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState({ ...this.state, form });
    }
    handleSubmit(event){
        event.preventDefault();
        // console.log(`Метод handleSubmit() сработал.`);
    }

    render() {
        return (
        <main>
            <section className="dropdown1">
                <Container className="d-flex justify-content-between block-registrations">
                    <Card className="all-unit">
                        <h2 className="Personal">Создание аккаунта</h2>
                        <p className="enter-the-number">Пожалуйста, заполните поля для регистрации</p>
                    </Card>
                    <Form className="entry-block" action="/personalArea" onSubmit={this.handleSubmit}>
                        <Form.Group className="Password1 dropdown">
                            <Form.Label>Имя</Form.Label>
                            <Form.Control 
                            className="Password" 
                            name="firstName" 
                            type="text" 
                            placeholder="" 
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="Password1 dropdown">
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control 
                            className="Password" 
                            name="lastName" 
                            type="text" 
                            placeholder="" 
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="Password1 dropdown">
                            <Form.Label>Отчество</Form.Label>
                            <Form.Control 
                            className="Password" 
                            name="middleName" 
                            type="text" 
                            placeholder="" 
                            value={this.state.middleName}
                            onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="Password1 dropdown">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                            className="Password" 
                            name="password" 
                            type="password" 
                            placeholder="" 
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="Password1 dropdown">
                            <Form.Label>Подтвердите пароль</Form.Label>
                            <Form.Control 
                            className="Password" 
                            name="password_confirm" 
                            type="password"
                            placeholder="" 
                            value={this.state.password_confirm}
                            onChange={this.handleInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="dropdown">
                            <Form.Label>Номер телефона</Form.Label>
                            <div className="d-flex justify-content-start">
                                <select name="phoneCode" onChange={this.handleInputChange}>
                                    <option
                                    className="dropdown-str" 
                                    value="+7"
                                    ><img src={rus_flag} alt="RUS"/> +7</option>
                                    <option 
                                    className="dropdown-str" 
                                    value="+380"
                                    ><img src={ua_flag} alt="UA"/> +380</option>
                                </select>
                                <Form.Control 
                                className="phone-number" 
                                name="phone"
                                type="text" 
                                placeholder="000-0000"
                                onChange={this.handleInputChange} />
                            </div>
                            <div className="d-flex justify-content-center register">
                                <Button onClick={this.loadSignUpData} className="button-enter" type="submit">
                                    Регистрация
                                    {/* to="/personalArea" */}
                                </Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Container>
            </section>
        </main>
        );
    }
}