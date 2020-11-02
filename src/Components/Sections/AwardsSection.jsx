import React from 'react'
import './ClientsSection.css';

import award_1 from '../../Image/awardsSection/award-1.png';
import award_2 from '../../Image/awardsSection/award-2.png';
import award_3 from '../../Image/awardsSection/award-3.png';
import award_4 from '../../Image/awardsSection/award-4.png';
import award_5 from '../../Image/awardsSection/award-5.png';
import award_6 from '../../Image/awardsSection/award-6.png';

const AwardsSection = () => {
    return (
        <section>
            <h2 className="content__title--color-satingold mx-auto text-center">Награды</h2>
            {/* .awards-slider>.awards-slider__item*6>img[src="award_$"] */}
            <div className="desktop-slider">
                <div className="desktop-slider__item"><img src={award_1} alt=""/></div>
                <div className="desktop-slider__item"><img src={award_2} alt=""/></div>
                <div className="desktop-slider__item"><img src={award_3} alt=""/></div>
                <div className="desktop-slider__item"><img src={award_4} alt=""/></div>
                <div className="desktop-slider__item"><img src={award_5} alt=""/></div>
                <div className="desktop-slider__item"><img src={award_6} alt=""/></div>
            </div>
        </section>
    );
}

export default AwardsSection;
