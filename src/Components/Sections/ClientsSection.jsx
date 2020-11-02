import React from 'react'
import { Container } from 'react-bootstrap';
import './ClientsSection.css';

import bigcoinstar from '../../Image/clientsSection/bigcoinstar.png';
import eviguard from '../../Image/clientsSection/eviguard.png';
import chartered_bank from '../../Image/clientsSection/standard_chartered_bank.png';
import hellenic from '../../Image/clientsSection/hellenic.png';
import lukspay from '../../Image/clientsSection/lukspay.png';
import lpb from '../../Image/clientsSection/lpb.png';

const ClientsSection = () => {
    return (
        <section>
            <Container>
                <h2 className="content__title--color-satingold mx-auto text-center">Наши клиенты и партнёры</h2>
                <div className="desktop-slider">
                    <div className="desktop-slider__item"><img src={bigcoinstar} alt=""/></div>
                    <div className="desktop-slider__item"><img src={eviguard} alt=""/></div>
                    <div className="desktop-slider__item"><img src={chartered_bank} alt=""/></div>
                    <div className="desktop-slider__item"><img src={hellenic} alt=""/></div>
                    <div className="desktop-slider__item"><img src={lukspay} alt=""/></div>
                    <div className="desktop-slider__item"><img src={lpb} alt=""/></div>
                </div>
            </Container>
        </section>
    );
}

export default ClientsSection;
