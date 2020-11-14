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

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // error: null,
            // isLoaded: false,
            // items: [],

            // firstName: "Андрей",
            // lastName: "Титаренко",
            // middleName: "Евгеньевич",
            // phone_number: "+380667164052",
            // password: "123456",
            // password_confirm: "123456"

            firstName: "",
            lastName: "",
            middleName: "",
            phone_number: "",
            password: "",
            password_confirm: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    loadSignUpData = async () => {
        let urlRegister = 'http://pravo.loc/api/register.php';
        let response = fetch(urlRegister, {
            method: 'POST',
            header: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(this.state),
        });

        let result = response.json();
        alert(result.message);
    }

    handleInputChange(event){
        // console.log(`Метод hanldeInputChange() сработал. Result: ${event.target.value}`);
        this.setState({firstName: event.target.value})
        const input = event.target.elements.firstName.value;
        console.log(input);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(`Метод handleSubmit() сработал.`);
    }
    handleTelephoneChange(event){
        console.log(`Метод hanldeInputChange() сработал. Result: ${this}`);

        // this.setState({phone_number: handleTelephoneCodeChange(event) + event.target.value})
    }

    handleTelephoneCodeChange(event){
        if(event.target.value == "rus")
        return "+7";
        return "+380";
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
                    <Form className="entry-block" onSubmit={this.handleSubmit}>
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
                        {/* <Form.Group className="Password1 dropdown">
                            <Form.Label>Email(необязательно)</Form.Label>
                            <Form.Control className="Password" name="" type="email" placeholder="" />
                        </Form.Group> */}
                        <Form.Group className="Password1 dropdown">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                            className="Password" 
                            name="password" 
                            type="password" 
                            placeholder="" 
                            value={this.state.password}
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
                                <select>
                                    <option
                                    className="dropdown-str" 
                                    value="rus"
                                    onChange={this.handleTelephoneCodeChange}
                                    >RUS: +7</option>
                                    <option 
                                    className="dropdown-str" 
                                    value="ua"
                                    onChange={this.handleTelephoneCodeChange}
                                    >UA: +380</option>
                                </select>
                                <Form.Control 
                                className="phone-number" 
                                type="text" 
                                placeholder="000-0000"
                                onChange={this.handleTelephoneChange} />
                            </div>
                            <div className="d-flex justify-content-center register">
                                <Button className="button-enter" type="submit">
                                    Регистрация
                                    {/* to="/personal-area" */}
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