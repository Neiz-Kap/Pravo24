import React, {
    Component
} from 'react';
import {
    Container,
    Row,
    Col,
    Breadcrumb,
    Card,
    Form,
    Button,
    Image
} from 'react-bootstrap';
import '../../PersonalAreaContent.css';

import avatar from '../../../../Image/PersonalAreaContent/avatar.png';

export default class PersonalAreaContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // isLoaded: false,
            // items: [],

            error: "",
            form: {
                firstName: "",
                lastName: "",
                middleName: "",
                email: "",
                phoneCode: "+7",
                phone: "",
            },
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    get phoneNumber() {
        return this.state.form.phoneCode + this.state.form.phone;
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
        // console.log(`Метод handleSubmit() сработал.`);
    }

    render() {
        return (
            <main className="background--color-light-blackhaze">
                <section>
                    <Container>
                        <Row className="py-3">
                            <Col>
                                <Breadcrumb>
                                    <Breadcrumb.Item className="content-link black" href="/">Главная</Breadcrumb.Item>
                                    <Breadcrumb.Item className="content-link" active>Контакты</Breadcrumb.Item>
                                </Breadcrumb>
                                <Card className="background--color-light-blackhaze pl-3">
                                    <h1 className="office-title">Личный&nbsp;кабинет</h1>
                                </Card>
                            </Col>
                            <Col>
                                <div className="office-avatar-block py-3 d-flex flex-column align-items-center">
                                    <Image src={ avatar } className="office-avatar"/>
                                    <Button className="office-avatar-edit btn-warning" variant="primary">Редактировать профиль</Button>
                                </div>
                                <Form>
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
                                    <Form.Row>
                                        <Col>
                                            <Button className="office-avatar-edit btn-warning mr-3" variant="primary">Сменить пароль</Button>
                                        </Col>
                                        <Col>
                                            <Button className="office-avatar-edit btn-warning" variant="primary">Выйти из аккаунта</Button>
                                        </Col>
                                    </Form.Row>
                                </Form>
                            </Col>
                            <Col className="d-none d-lg-block"></Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}