import React from "react";
import { Card, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './CompanyPage.css'

import company_background from '../../Image/companySection/background-company.jpg';

import business from '../../Image/companySection/businessman.svg';
import honesty from '../../Image/companySection/honesty.svg';
import piggy_bank from '../../Image/companySection/piggy-bank.svg';
import review from '../../Image/companySection/review.svg';
import time_management from '../../Image/companySection/time-management.svg';
import work from '../../Image/companySection/work.svg';

import award_1 from '../../Image/awardsSection/award-1.png';
import award_2 from '../../Image/awardsSection/award-2.png';
import award_3 from '../../Image/awardsSection/award-3.png';
import award_4 from '../../Image/awardsSection/award-4.png';
import award_5 from '../../Image/awardsSection/award-5.png';
import award_6 from '../../Image/awardsSection/award-6.png';

import eviguard from '../../Image/clientsSection/eviguard.png';
import chartered_bank from '../../Image/clientsSection/standard_chartered_bank.png';
import hellenic from '../../Image/clientsSection/hellenic.png';
import lukspay from '../../Image/clientsSection/lukspay.png';
import bigcoinstar from '../../Image/clientsSection/bigcoinstar.png';
import lpb from '../../Image/clientsSection/lpb.png';

import video from '../../Image/desctopPage/video.png';

export const CompanyContent = () => (
  <main>
    <section className="h-100vh-content">
      <Card className="text-white h-100">
        <Card.Img src={company_background} alt="Card image" />
        <Card.ImgOverlay>
          <Container className="position-relative w-100 h-100">
            <Card.Title className="content-link d-flex"><Link to="/">Главная</Link>/Компания</Card.Title>
            <div className="position-absolute t-40">
              <Card.Title className="contacts-content__title company-content__title satin-sheen-gold">Ваш бизнес. Наши заботы</Card.Title>
              <p className="legal-description">
                Наша миссия: воплощать бизнес-
                идеи клиентов, преодолевая
                юридические барьеры
              </p>
            </div>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </section>

    <section className="background--color-blackhaze pv-27px">
      <Container>
        <h2 className="content__title--color-satingold mx-auto text-center">Почему мы?</h2>
        {/* .services-block>.services__item*6>img.services-icon[src={services_icon_$}]+h3.services-block__description+Link[to]{Подробнее} */}
        <div className="services-block">
          <Card className="services__item d-flex flex-column align-items-center">
            <img src={work} alt="work" className="services-icon" />
            <h3 className="services-block__description tion">Мы эффективные</h3>
          </Card>
          <Card className="services__item d-flex flex-column align-items-center">
            <img src={honesty} alt="honesty" className="services-icon" />
            <h3 className="services-block__description tion">Нам доверяют</h3>
          </Card>
          <Card className="services__item d-flex flex-column align-items-center">
            <img src={time_management} alt="time_management" className="services-icon" />
            <h3 className="services-block__description tion">Быстрая помощь</h3>
          </Card>
          <Card className="services__item d-flex flex-column align-items-center">
            <img src={piggy_bank} alt="piggy_bank" className="services-icon" />
            <h3 className="services-block__description tion">Адекватные цены</h3>
          </Card>
          <Card className="services__item d-flex flex-column align-items-center">
            <img src={business} alt="business" className="services-icon" />
            <h3 className="services-block__description tion">Мы знаем свое дело</h3>
          </Card>
          <Card className="services__item d-flex flex-column align-items-center">
            <img src={review} alt="review" className="services-icon" />
            <h3 className="services-block__description tion">Мы любим свою работу</h3>
          </Card>
        </div>
      </Container>
    </section>
    <section>
      <Container>
        <div>
          <div>
            <h3>О компании</h3>
            <div>
            <p>SBSB - одна из сильнейших юридических фирм в СНГ и Европе, консультирующая 
              по вопросам в области FinTech. Мы углубленно занимаемся двумя направлениями: 
              FinTech и налоговое право. Это позволяет нашей команде быть квалифицированными и опытными 
              специалистами именно в этих сферах.
            </p>
            <p>
              Более 8 лет мы оказываем полный юридический сервис как для стартапов, 
              так и известным финансовым компаниям. Это включает консультирование 
              по коммерческому и корпоративному праву, информационным технологиям и
              IP правам, применения электронных денег, финансовых лицензий, 
              вопросам правового регулирования FinTech и блокчейна.
            </p>
            <p>Среди наших клиентов банки, финансовые институции, 
              хедж-фонды и форекс брокеры, криптобиржи, блокчейн проекты, 
              а также любой бизнес,
              заинтересованный в налоговом планировании.
            </p>
            </div>
          </div>
          <img src={video} alt=""/>
        </div>
      </Container>

      

    </section>
    <section>
            <h2 className="content__title--color-satingold mx-auto text-center">Награды</h2>
            <div className="desktop-slider d-flex justify-content-around rewards">
                {/* <div className="desktop-slider__item"><img src={award_1} alt=""/></div> */}
                <div className="desktop_item"><img src={award_2} alt=""/></div>
                <div className="desktop_item"><img src={award_3} alt=""/></div>
                <div className="desktop_item"><img src={award_4} alt=""/></div>
                <div className="desktop_item"><img src={award_5} alt=""/></div>
                {/* <div className="desktop-slider__item"><img src={award_6} alt=""/></div> */}
            </div>
    </section>
    <section>
      <Container>
        <h2 className="content__title--color-satingold mx-auto text-center">Наши клиенты и партнёры</h2>
        <div className="desktop-slider justify-content-around rewards">
          {/* <div className="desktop-slider__item"><img src={bigcoinstar} alt=""/></div> */}
          <div className="desktop_item"><img src={eviguard} alt=""/></div>
          <div className="desktop_item"><img src={chartered_bank} alt=""/></div>
          <div className="desktop_item"><img src={hellenic} alt=""/></div>
          <div className="desktop_item"><img src={lukspay} alt=""/></div>
          {/* <div className="desktop-slider__item"><img src={lpb} alt=""/></div> */}
        </div>
      </Container>
    </section>
        <section>
        <div className=" descr">
                <p className="description-below">Наши менеджеры ответят на любые вопросы, </p>
                <p className=" descriptiona"> 
                    <u>пишите нам</u>&#160;
                    <span className="letter"> 
                        или звоните&#160;
                    </span>
                    +7(495)809-19-45 
                </p>
            </div>
        </section>
  </main>
);
