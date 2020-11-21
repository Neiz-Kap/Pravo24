import React, {
    Component
} from 'react'
import './PersonalAreaContent.css';
import {
    Card,
    Nav,
    Button,
    Form,
    Container,
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

import {rus_flag} from '../../Image/PersonalAreaContent/rus-flag.svg'
import {ua_flag} from '../../Image/PersonalAreaContent/ua-flag.svg'

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            items: '',
            data: {
                status: "",
                message: "",
                token: "",
            },
            form: {
                password: "",
                phoneCode: "+7",
                phone: "",
            },
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        // console.log(`Метод hanldeInputChange() сработал. Result: ${[event.target.name]}:${event.target.value}`);
        const form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState({
            ...this.state,
            form
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(`Метод handleSubmit() сработал.`);
    }
    get phoneNumber() {
        return this.state.form.phoneCode + this.state.form.phone;
    }

    loadSignInData = (event) => {
        event.preventDefault();
        // console.log({
        //     phone_number: this.phoneNumber,
        //     ...this.state.form
        // })
        let urlAuthorization = 'http://pravo.loc/api/login.php';
        fetch(urlAuthorization, {
            method: 'POST',
            header: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                phone_number: this.phoneNumber,
                ...this.state.form
            }),
        }).then((result) => {
            result.json().then((data) => {
                // Автризация успешна
                console.log(data);
                localStorage.getItem(data.token);
                localStorage.setItem("dataToken", data.token);

            })
        }).catch((error) => {
            // {"status": "error", "message": "asddawdawdawasd"}
            console.error(error);
            const data = this.state.data;
            this.setState({
                error,
                ...data
            });
        })
        // если есть какой-либо message, то выводим сообщение на экран
    }

    componentDidMount = () => {
        let urlProfile = 'http://pravo.loc/api/profile.php';
        fetch(urlProfile, { method: 'GET', headers: { "Authorization": localStorage.getItem('dataToken') } })
            .then(res => res.json())
            .catch(err => {
                console.log(err);
                localStorage.clear();
            }) 
            .then(result => {
                    console.log(`result: ${result}`);
                    this.setState({result, ...this.state})  
                    this.setState({
                        // isLoaded,
                            // items
                    });
                            
                         
                    console.log(this.state)  
            });

        // const config = {

        //     headers: {
        //         Authorization: 'Bearer ' + localStorage.getItem('token'),
        //     }
        // }

        // axios.get('user').then(
        //     res => {
        //         console.log(res);
        //     },
        //     err => {
        //         console.log(err);
        //     }
        // )
        // localStorage.clear();
    }

    render() {
        // let {
        //     isLoaded,
        //     items
        // } = this.state;

        // if (!isLoaded) {
        //     return <div> Loading... </div>
        // } else {
            return (
                

                <main className="enter">
                    {/* Вход */}
                    <Container className="d-flex justify-content-between block-enter">
                        <Form.Group className="all-unit">
                            <h1 className="Personal">Вход в личный кабинет</h1>
                            <p className="enter-the-number">Пожалуйста, введите свой номер телефона и пароль</p>
                        </Form.Group>
                        <Form action="/" onSubmit={this.handleSubmit} className="entry-block">
                            <Form.Label>{this.state.data.message}</Form.Label>
                            {/* <Form.Label>{this.state.result}</Form.Label>
                            <Form.Label>{this.state.result}</Form.Label>
                            <Form.Label>{this.state.result}</Form.Label>
                            <Form.Label>{this.state.result}</Form.Label>
                            <Form.Label>{this.state.result}</Form.Label> */}
                            <Form.Group className="dropdown">
                                <Form.Label>Номер телефона</Form.Label>
                                <div className="d-flex justify-content-start dropdown">
                                    <Form.Control as="select" className="dropdown-list"
                                    onChange={this.handleInputChange}>
                                        <option value="+7">+7</option>
                                        <option value="+380">+380</option>
                                    </Form.Control>
                                    <Form.Control 
                                        className="phone-number" 
                                        type="text" 
                                        name="phone"
                                        placeholder="000-0000"
                                        value={this.state.form.phone}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="InputPassword1 dropdown">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control 
                                className="Password" 
                                type="password" 
                                name="password"
                                placeholder=""
                                value={this.state.form.password}
                                onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="dropdown">
                                <div className="d-flex justify-content-start">
                                    <div className="d-flex p-2">
                                        <div className="d-flex remem-tick">
                                        <p className="remember" >Запомните меня</p>
                                        <Form.Check className="tick" type="checkbox"/>
                                        </div>
                                        <div className="remember-tick" />
                                    </div>
                                    <Button className="button-enter No-account1" onClick={this.loadSignInData}>
                                        Войти
                                    </Button>
                                </div>
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center Forget-account dropdown">
                                <Nav.Link>
                                <Link className="Forget-password" to="/recovery">
                                    Забыли пароль?
                                </Link>
                                </Nav.Link>
                                <Nav.Link>
                                <Link className="No-account" to="/signUp" >
                                    Нет аккаунта?
                                </Link>
                                </Nav.Link>
                            </Form.Group>
                        </Form>
                    </Container>
                </main>
            );
        // }
    }

}