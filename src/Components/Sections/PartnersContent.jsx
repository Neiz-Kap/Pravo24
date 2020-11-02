import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PartnersContent.css';

import award_6 from '../../Image/awardsSection/award-6.png';

import bigcoinstar from '../../Image/clientsSection/bigcoinstar.png';
import eviguard from '../../Image/clientsSection/eviguard.png';
import chartered_bank from '../../Image/clientsSection/standard_chartered_bank.png';
import hellenic from '../../Image/clientsSection/hellenic.png';
import lukspay from '../../Image/clientsSection/lukspay.png';
import lpb from '../../Image/clientsSection/lpb.png';

export const PartnersContent = () => (
    <section className="background--color-light-blackhaze ">
        <Container className="position-relative pv-70px">
            <Card.Title className="content-link black d-flex"><Link to="/">Главная</Link>/Наши партнёры</Card.Title>
            <h2 className="content__title--color-satingold">Наши услуги</h2>
            <Card.Body className="partners-block d-flex justify-content-between flex-wrap">
                {/* Card.partners__item.d-flex.justify-content-center.align-items-center*12>Image/ */}
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={bigcoinstar}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={award_6}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
                <Card className="partners__item d-flex justify-content-center align-items-center">
                    <Image src={eviguard}/>
                </Card>
            </Card.Body>
        </Container>
    </section>
)