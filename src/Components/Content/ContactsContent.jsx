import React from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ContactsContent.css';

import contact_background from '../../Image/contactsContent/modern-office-desktop.jpg'
import lindekin from '../../Image/contactsContent/lindekin.svg'
import facebook from '../../Image/contactsContent/facebook.svg'
import messages from '../../Image/contactsContent/messages.svg'
import skype from '../../Image/contactsContent/skype.svg'

export const ContactsContent = () => (
    <main>
        <section className="h-100vh">
            <Card className="text-white h-100">
                <Card.Img src={contact_background} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Body className="position-relative w-100 h-100">
                        <Card.Title className="content-link d-flex"><Link to="/">Главная</Link>/Контакты</Card.Title>
                        <Card.Title className="contacts-content__title d-flex align-items-center position-absolute t-50">Контактная <br /> информация</Card.Title>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </section>
        <section className="pv-44px">
            <Container className="d-flex justify-content-center">
                <Form className="contacts-form d-flex flex-column align-items-center">
                    <h2 className="contacts__title text-center">Связаться с нами</h2>
                    <h3 className="contacts-form__subtitle text-center">Заполните, пожалуйста, форму и наш менеджер
                        свяжется с вами в течение дня
                    </h3>
                    <Form.Group>
                        <Form.Control placeholder="Ваше имя" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control placeholder="Контактный телефон" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Ваш email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Суть запроса" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="btn-lg btn-warning">
                        Отправить
                </Button>
                </Form>
            </Container>
        </section>
        <section>
            <Container className="d-flex flex-column align-items-center">
                <h2 className="contacts__title text-center">Дополнительные контакты</h2>
                <ul className="contacts-list">
                    <li className="w-100 d-flex justify-content-between">
                        <img src={messages} alt=""/>
                        <h5 className="contacts-info__title">pochta@ya.com</h5>
                    </li>
                    <li className="w-100 d-flex justify-content-between">
                        <img src={skype} alt=""/>
                        <h5 className="contacts-info__title">info_631667</h5>
                    </li>
                    <li className="w-100 d-flex justify-content-between">
                        <img src={facebook} alt=""/>
                        <h5 className="contacts-info__title">Facebook Community </h5>
                    </li>
                    <li className="w-100 d-flex justify-content-between">
                        <img src={lindekin} alt=""/>
                        <h5 className="contacts-info__title">LinkedIn</h5>
                    </li>
                </ul>
            </Container>
        </section>
    </main>
)