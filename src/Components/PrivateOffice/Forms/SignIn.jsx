import React, {
    Component
} from 'react'
import '../PersonalAreaContent.css';
import {
    Container,
    Nav,
    Row,
    Col,
    Form,
    Button
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

// import {rus_flag} from '../../Image/PersonalAreaContent/rus-flag.svg'
// import {ua_flag} from '../../Image/PersonalAreaContent/ua-flag.svg'

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
                this.setState({ result, ...this.state })
                this.setState({
                    // isLoaded,
                    // items
                });
                console.log(this.state);
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

            <main className="background--color-light-blackhaze">
                {/* Вход */}
                <Container>
                    <Row className="mt-3">
                        <Col>
                            <Form.Group className="min-content">
                                <h1 className="office-title">Вход&nbsp;в&nbsp;личный&nbsp;кабинет</h1>
                                <p className="enter-the-number">Пожалуйста, введите свой номер телефона и пароль</p>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form action="/personalArea" onSubmit={this.handleSubmit} className="my-5 background--color-light-blackhaze">
                                <Form.Label>{this.state.data.message}</Form.Label>
                                {/* <Form.Label>{this.state.result}</Form.Label>
                                    <Form.Label>{this.state.result}</Form.Label>
                                    <Form.Label>{this.state.result}</Form.Label>
                                    <Form.Label>{this.state.result}</Form.Label>
                                    <Form.Label>{this.state.result}</Form.Label> */}
                                <Form.Group>
                                    <Form.Label>Номер телефона</Form.Label>
                                    <div className="d-flex justify-content-start">
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
                                <Form.Group className="InputPassword1">
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
                                <Form.Group>
                                <Form.Row className="d-flex justify-content-start row--wrap-self">
                                    <Col className="d-flex">
                                        <Form.Group controlId="formBasicCheckbox">
                                            {/* <Form.Check type="checkbox" label="Запомните меня" /> */}
                                            <div class="form-check pl-0 pr-3">
                                                <Form.Label title="" for="formBasicCheckbox" class="form-check-label">Запомните&nbsp;меня</Form.Label>
                                                <input type="checkbox" id="formBasicCheckbox" class="form-check-input ml-0 mr-n3"/>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col className="button-separator">
                                        <Button className="button-enter No-account1" onClick={this.loadSignInData}>
                                            Войти
                                        </Button>
                                    </Col>
                                </Form.Row>
                                </Form.Group>
                                <Form.Row className="d-flex justify-content-center Forget-account">
                                    <Col>
                                        <Link className="Forget-password" to="/recovery">
                                            Забыли пароль?
                                        </Link>
                                    </Col>
                                    <Col>
                                        <Link className="No-account" to="/signUp" >
                                            Нет аккаунта?
                                        </Link>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Col>
                        <Col className="d-none d-lg-block"></Col>
                    </Row>
                </Container>
            </main>
        );
        // }
    }

}