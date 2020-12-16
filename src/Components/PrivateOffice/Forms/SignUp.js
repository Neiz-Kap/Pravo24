import React from "react";
import '../PersonalAreaContent.css';
import {
    Container,
    Row,
    Col,
    Form,
    Button
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
        <main className="background--color-light-blackhaze h-100vh-content">
            <section>
                <Container className="block-registrations">
                    <Row className="mt-3">
                        <Col>
                            <Form.Group className="min-content">
                                <h2 className="office-title">Создание&nbsp;аккаунта</h2>
                                <p className="enter-the-number">Пожалуйста, заполните поля для регистрации</p>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form className="my-5 background--color-light-blackhaze" action="/signIn" onSubmit={this.handleSubmit}>
                                <Form.Group className="Password1">
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
                                <Form.Group className="Password1">
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
                                <Form.Group className="Password1">
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
                                <Form.Group className="Password1">
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
                                <Form.Group className="Password1">
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
                                <Form.Group>
                                    <Form.Label>Номер телефона</Form.Label>
                                    <div className="d-flex justify-content-start">
                                        <Form.Control as="select" className="dropdown-list" name="phoneCode" onChange={this.handleInputChange}>
                                            <option
                                            value="+7"
                                            >+7</option>
                                            <option
                                            value="+380"
                                            >+380</option>
                                        </Form.Control>
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
                        </Col>
                        <Col className="d-none d-lg-block"></Col>
                    </Row>
                </Container>
            </section>
        </main>
        );
    }
}