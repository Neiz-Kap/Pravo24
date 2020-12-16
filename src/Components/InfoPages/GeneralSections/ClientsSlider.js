import React from 'react'
import { Carousel, Container, Image } from 'react-bootstrap';
import './SliderSection.css';

import bigcoinstar from '../../../Image/ClientsSlider/bigcoinstar.png';
import eviguard from '../../../Image/ClientsSlider/eviguard.png';
import chartered_bank from '../../../Image/ClientsSlider/standard_chartered_bank.png';
import hellenic from '../../../Image/ClientsSlider/hellenic.png';
import lukspay from '../../../Image/ClientsSlider/lukspay.png';
import lpb from '../../../Image/ClientsSlider/lpb.png';

const ClientsSlider = () => {
    return (
        <section className="pb-5">
            <Container>
                <h2 className="content__title--color-satingold mx-auto text-center">Наши клиенты и партнёры</h2>
                <Carousel className="desktop-slider">
                    <Carousel.Item className="desktop-slider__item"><Image src={bigcoinstar} alt=""/></Carousel.Item>
                    <Carousel.Item className="desktop-slider__item"><Image src={eviguard} alt=""/></Carousel.Item>
                    <Carousel.Item className="desktop-slider__item"><Image src={chartered_bank} alt=""/></Carousel.Item>
                    <Carousel.Item className="desktop-slider__item"><Image src={hellenic} alt=""/></Carousel.Item>
                    <Carousel.Item className="desktop-slider__item"><Image src={lukspay} alt=""/></Carousel.Item>
                    <Carousel.Item className="desktop-slider__item"><Image src={lpb} alt=""/></Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}

export default ClientsSlider;
