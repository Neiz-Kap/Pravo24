import React from 'react';

import { Container, Card, Button, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ContactsPage.css';

import contact_background from '../../Image/contactsContent/modern-office-desktop.jpg'
import lindekin from '../../Image/contactsContent/lindekin.svg'
import facebook from '../../Image/contactsContent/facebook.svg'
import messages from '../../Image/contactsContent/messages.svg'
import skype from '../../Image/contactsContent/skype.svg'

import ApplicationSection from '../Sections/ApplicationSection';

export const ContactsPage = () => {
    return(
    <main>
        <section className="h-100vh-content">
            <Card className="text-white h-100">
                <Card.Img src={contact_background} alt="Card image" />
                <Card.ImgOverlay>
                    <Container className="position-relative w-100 h-100">
                        <Card.Title className="content-link d-flex"><Link to="/">Главная</Link>/Контакты</Card.Title>
                        <Card.Title className="contacts-content__title d-flex align-items-center position-absolute t-50">Контактная <br /> информация</Card.Title>
                    </Container>
                </Card.ImgOverlay>
            </Card>
        </section>
        <section className="pv-44px background--color-blackhaze">
            <Container className="d-flex justify-content-center">
                <Form className="contacts-form d-flex flex-column align-items-center">
                    <h2 className="contacts__title text-center">Связаться с нами</h2>
                    <h3 className="contacts-form__subtitle text-center">
                        Заполните, пожалуйста, форму и наш менеджер
                        свяжется с вами в течение дня
                    </h3>
                    <Form.Group>
                        <Form.Control className="contacts__input placeholder-center" placeholder="Ваше имя" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className="contacts__input placeholder-center" type="tel" placeholder="Контактный телефон" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className="contacts__input placeholder-center" type="email" placeholder="Ваш email" />
                    </Form.Group>
                    <Form.Group className="mb-4 d-flex justify-content-center">
                        <textarea className="contacts__input placeholder-center contacts__input--size-middle" placeholder="Суть запроса" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="contacts-form__button btn-lg btn-warning">
                        Отправить
                </Button>
                </Form>
            </Container>
        </section>
        <section>
            <Container className="d-flex flex-column align-items-center">
                <h2 className="contacts__title mt-3 mb-4 text-center">Дополнительные контакты</h2>
                <ListGroup className="contacts-list">
                    <ListGroup.Item className="w-100 d-flex mb-3">
                        <img src={messages} className="mr-5" alt=""/>
                        <h5 className="contacts-info__title">pochta@ya.com</h5>
                    </ListGroup.Item>
                    <ListGroup.Item className="w-100 d-flex mb-3">
                        <img src={skype} className="mr-5" alt=""/>
                        <h5 className="contacts-info__title">info_631667</h5>
                    </ListGroup.Item>
                    <ListGroup.Item className="w-100 d-flex mb-3">
                        <img src={facebook} className="mr-5" alt=""/>
                        <h5 className="contacts-info__title text-nowrap">Facebook Community </h5>
                    </ListGroup.Item>
                    <ListGroup.Item className="w-100 d-flex mb-3">
                        <img src={lindekin} className="mr-5" alt=""/>
                        <h5 className="contacts-info__title">LinkedIn</h5>
                    </ListGroup.Item>
                </ListGroup>
            </Container>
        </section>
        <ApplicationSection/>
    </main>
    );
}



