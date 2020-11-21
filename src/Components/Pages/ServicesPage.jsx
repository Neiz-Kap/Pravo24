import React from "react";
import { Container, Card } from 'react-bootstrap';
import './ServicesPage.css';
import { Link } from "react-router-dom";

// import services_background from '../../Image/services/services_background.jpg';

import services_icon_1 from '../../Image/services/services_icon (1).svg';
import services_icon_2 from '../../Image/services/services_icon (2).svg';
import services_icon_3 from '../../Image/services/services_icon (3).svg';
import services_icon_4 from '../../Image/services/services_icon (4).svg';
import services_icon_5 from '../../Image/services/services_icon (5).svg';
import services_icon_6 from '../../Image/services/services_icon (6).svg';

import CallSection from '../Sections/CallSection';
import ApplicationSection from '../Sections/ApplicationSection';

export const ServicesPage = () => {
    return (
        <main>
            <section>
                <Container className='Container-image'>
                    <h1 className="service">Наши услуги</h1>
                    <div className="d-flex justify-content-center">
                        <p className="description">Мы помогаем юридически реализовать ваши супер идеи, от создания платежной системы,
                        биржи криптовалют до запуска международного банка. Наша основная задача - преодоление
                        барьеров между правом и инновациями.
                    </p>
                    </div>
                    <div className="maps">
                        <Card className="map">
                            <img className="fa-Group" src={services_icon_1} alt="Group" />
                            <p className="Statement-cancellation">Заявление о расторжении брака в судебном порядке</p>
                            <Link to="" className="services__item-link">Подробнее</Link>
                        </Card>
                        <Card className="map">
                            <img className="fa-Vector" src={services_icon_2} alt="Vector" />
                            <p className="Statement-extraditions">Заявление на выдачу судебного приказа на взыскание алиментов на содержание детей</p>
                            <Link to="" className="services__item-link">Подробнее</Link>
                        </Card>
                        <Card className="map">
                            <img className="fa-inheritance" src={services_icon_3} alt="inheritance" />
                            <p className="Statement-establishments">Заявление об установлении факта принятия наследства.</p>
                            <Link to="" className="services__item-link">Подробнее</Link>
                        </Card>
                    </div>
                    <div className="maps">
                        <Card className="map">
                            <img className="fa-contract" src={services_icon_4} alt="contract" />
                            <p className="Development">Разработка проекта договора</p>
                            <Link to="" className="services__item-link">Подробнее</Link>
                        </Card>
                        <Card className="map">
                            <img className="fa-Group1" src={services_icon_5} alt="Group1" />
                            <p className="claim">Подготовка претензий</p>
                            <Link to="" className="services__item-link">Подробнее</Link>
                        </Card>
                        <Card className="map">
                            <img className="fa-Group2" src={services_icon_6} alt="Group2" />
                            <p className="Conduction">Ведение договорной работы</p>
                            <Link to="" className="services__item-link">Подробнее</Link>
                        </Card>
                    </div>
                </Container>
            </section>
            <CallSection />
            <ApplicationSection/>
        </main>
    );
}
