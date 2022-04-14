import React from 'react'
import { Container, Carousel, Image } from 'react-bootstrap';
import './SliderSection.css';

import award_1 from '../../../Image/awardsSlider/award-1.png';
import award_2 from '../../../Image/awardsSlider/award-2.png';
import award_3 from '../../../Image/awardsSlider/award-3.png';
import award_4 from '../../../Image/awardsSlider/award-4.png';
import award_5 from '../../../Image/awardsSlider/award-5.png';
import award_6 from '../../../Image/awardsSlider/award-6.png';

const AwardsSlider = () => {
    return (
        <section className="pb-5">
            <Container>
            <h2 className="content__title--color-satingold mx-auto text-center">Награды</h2>
            {/* .awards-slider>.awards-slider__item*6>img[src="award_$"] */}
            <Carousel className="desktop-slider">
                <Carousel.Item className="desktop-slider__item"><Image src={award_1} alt=""/></Carousel.Item>
                <Carousel.Item className="desktop-slider__item"><Image src={award_2} alt=""/></Carousel.Item>
                <Carousel.Item className="desktop-slider__item"><Image src={award_3} alt=""/></Carousel.Item>
                <Carousel.Item className="desktop-slider__item"><Image src={award_4} alt=""/></Carousel.Item>
                <Carousel.Item className="desktop-slider__item"><Image src={award_5} alt=""/></Carousel.Item>
                <Carousel.Item className="desktop-slider__item"><Image src={award_6} alt=""/></Carousel.Item>
            </Carousel>
            </Container>
        </section>
    );
}

export default AwardsSlider;
