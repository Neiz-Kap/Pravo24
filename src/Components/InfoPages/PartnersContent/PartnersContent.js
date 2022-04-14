import React from 'react';
import { Container, Card, Image, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PartnersContent.css';

// import award_6 from '../../Image/awardsSlider/award-6.png';

import bigcoinstar from '../../../Image/ClientsSlider/bigcoinstar.png';
import eviguard from '../../../Image/ClientsSlider/eviguard.png';
import chartered_bank from '../../../Image/ClientsSlider/standard_chartered_bank.png';
import hellenic from '../../../Image/ClientsSlider/hellenic.png';
import lukspay from '../../../Image/ClientsSlider/lukspay.png';
import lpb from '../../../Image/ClientsSlider/lpb.png';

import CallSection from '../GeneralSections/CallSection';
import ApplicationSection from '../GeneralSections/ApplicationSection';

const PartnersContent = () => {
    return(
    <main>
        <section className="background--color-light-blackhaze ">
            <Container className="position-relative pv-70px">
                <Breadcrumb>
                    <Breadcrumb.Item className="content-link black" href="/">Главная</Breadcrumb.Item>
                    <Breadcrumb.Item className="content-link" active>Контакты</Breadcrumb.Item>
                </Breadcrumb>
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
                        <Image src={chartered_bank}/>
                    </Card>
                    <Card className="partners__item d-flex justify-content-center align-items-center">
                        <Image src={hellenic}/>
                    </Card>
                    <Card className="partners__item d-flex justify-content-center align-items-center">
                        <Image src={lukspay}/>
                    </Card>
                    <Card className="partners__item d-flex justify-content-center align-items-center">
                        <Image src={lpb}/>
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
        <CallSection/>
        <ApplicationSection/>
    </main>
    );
}

export default PartnersContent;