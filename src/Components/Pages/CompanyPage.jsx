import React from "react";
import { Container, Card, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './CompanyPage.css'

import company_background from '../../Image/companySection/background-company.jpg';

import business from '../../Image/companySection/businessman.svg';
import honesty from '../../Image/companySection/honesty.svg';
import piggy_bank from '../../Image/companySection/piggy-bank.svg';
import review from '../../Image/companySection/review.svg';
import time_management from '../../Image/companySection/time-management.svg';
import work from '../../Image/companySection/work.svg';

import video from '../../Image/desctopPage/video.jpg';

import CallSection from '../Sections/CallSection';
import ApplicationSection from '../Sections/ApplicationSection';
import AwardsSlider from '../Sections/AwardsSlider';
import ClientsSlider from '../Sections/ClientsSlider';

export const CompanyPage = () => (
  <main>
    <section className="h-100vh-content">
      <Card className="text-white h-100">
        <Card.Img src={company_background} alt="Card image" />
        <Card.ImgOverlay>
          <Container fluid className="position-relative w-100 h-100">
            {/* <Card.Title className="content-link d-flex"><Link to="/">Главная</Link>/Компания</Card.Title> */}
            <Breadcrumb>
              <Breadcrumb.Item className="content-link" href="/">Главная</Breadcrumb.Item>
              <Breadcrumb.Item className="content-link" active>Компания</Breadcrumb.Item>
            </Breadcrumb>
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
        <div className="d-flex justify-content-between">
          <div className="company-about_description mr-5">
            <h2 className="content__title--color-satingold">О компании</h2>
            <div>
              <p>
                SBSB&nbsp;&mdash; одна из&nbsp;сильнейших юридических фирм в&nbsp;СНГ и&nbsp;Европе, консультирующая
                по&nbsp;вопросам в&nbsp;области FinTech. Мы&nbsp;углубленно занимаемся двумя направлениями:
                FinTech и&nbsp;налоговое право. Это позволяет нашей команде быть квалифицированными и&nbsp;опытными
                специалистами именно в&nbsp;этих сферах.
              </p>
              <p>
                Более 8&nbsp;лет мы&nbsp;оказываем полный юридический сервис как для стартапов,
                так и&nbsp;известным финансовым компаниям. Это включает консультирование
                по&nbsp;коммерческому и&nbsp;корпоративному праву, информационным технологиям и
                IP&nbsp;правам, применения электронных денег, финансовых лицензий,
                вопросам правового регулирования FinTech и&nbsp;блокчейна.
              </p>
              <p>
                Среди наших клиентов банки, финансовые институции,
                хедж-фонды и&nbsp;форекс брокеры, криптобиржи, блокчейн проекты,
                а&nbsp;также любой бизнес,
                заинтересованный в&nbsp;налоговом планировании.
              </p>
            </div>
          </div>
          <div className="company-about-video d-flex align-items-center">
            <img src={video} alt="video" />
          </div>
        </div>
      </Container>
    </section>
    <AwardsSlider />
    <ClientsSlider />
    <CallSection />
    <ApplicationSection />
  </main>
);
