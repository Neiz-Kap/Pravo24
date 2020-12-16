import React from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  Image,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DesktopPage.css";

import desktop_background from "../../../Image/desctopPage/desktop-background.jpg";
import bank from "../../../Image/desctopPage/bank.svg";
import achievement from "../../../Image/desctopPage/achievement.svg";
import people from "../../../Image/desctopPage/people.svg";

import services_icon_1 from '../../../Image/services/services_icon(1).svg';
import services_icon_2 from '../../../Image/services/services_icon(2).svg';
import services_icon_3 from '../../../Image/services/services_icon(3).svg';
import services_icon_4 from '../../../Image/services/services_icon(4).svg';
import services_icon_5 from '../../../Image/services/services_icon(5).svg';
import services_icon_6 from '../../../Image/services/services_icon(6).svg';

import video from "../../../Image/desctopPage/video.jpg";
import youtube_icon from "../../../Image/desctopPage/youtube-icon.svg";

import main_news from "../../../Image/desctopPage/main_news.png";
import news_1 from "../../../Image/desctopPage/news_1.png";
import news_2 from "../../../Image/desctopPage/news_2.png";
import news_3 from "../../../Image/desctopPage/news_3.png";

import ClientsSlider from "../GeneralSections/ClientsSlider";
import AwardsSlider from "../GeneralSections/AwardsSlider";
import ApplicationSection from "../GeneralSections/ApplicationSection";

const DesktopMainContent = () => {
  return (
    <section className="h-100vh-content">
      <Card className="text-white h-100">
        <Card.Img src={desktop_background} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Body className="position-relative w-100 h-100">
            <Card.Body className="h-100 d-flex flex-column align-items-center justify-content-center">
              <Card.Title className="text-center desktop-content-title d-flex">
                Право<span>24</span>
              </Card.Title>
              <Button
                className="header-btn desktop-content-btn"
                variant="warning"
              >
                Бесплатная консультация
              </Button>
            </Card.Body>
            <Row className="position-absolute fixed-bottom desktop-content-table">
              <Col md={4} className="desktop-content-table__item">
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                  <div className="desktop-col__item-top d-flex align-items-center">
                    <span className="desktop-col__number mr-1">7</span>
                    <img src={achievement} alt="icon svg" />
                  </div>
                  <div className="col__item-bottom">
                    <span className="desktop-col__text">лет опыта</span>
                  </div>
                </div>
              </Col>
              <Col md={4} className="desktop-content-table__item">
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                  <div className="desktop-col__item-top d-flex align-items-center">
                    <span className="desktop-col__number mr-1">720</span>
                    <img src={people} alt="icon svg" />
                  </div>
                  <div className="desktop-col__item-bottom">
                    <span className="desktop-col__text">клиентов</span>
                  </div>
                </div>
              </Col>
              <Col md={4} className="desktop-content-table__item">
                <div className="h-100 d-flex flex-column justify-content-center align-items-center">
                  <div className="desktop-col__item-top d-flex align-items-center">
                    <span className="desktop-col__number mr-1">100</span>
                    <img src={bank} alt="icon svg" />
                  </div>
                  <div className="col__item-bottom">
                    <span className="desktop-col__text">банков-партнёров</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </section>
  );
};

const DesktopServices = () => {
  return (
    <section className="background--color-blackhaze pv-27px">
      <Container>
        <h2 className="content__title--color-satingold mx-auto text-center">
          Наши услуги
        </h2>
        {/* .services-block>.services__item*6>img.services-icon[src={services_icon_$}]+h3.services-block__description+Link[to]{Подробнее} */}
        <div className="services-block">
          <div className="services__item d-flex flex-column align-items-center my-5">
            <img src={services_icon_1} alt="services icon" className="services-icon" />
            <h3 className="services-block__description">
              Заявление о&nbsp;расторжении брака в&nbsp;судебном порядке
            </h3>
            <Link to="" className="services__item-link">
              Подробнее
            </Link>
          </div>
          <div className="services__item d-flex flex-column align-items-center my-5">
            <img src={services_icon_2} alt="services icon" className="services-icon" />
            <h3 className="services-block__description">
              Заявление на&nbsp;выдачу судебного приказа на&nbsp;взыскание
              алиментов на&nbsp;содержание детей
            </h3>
            <Link to="" className="services__item-link">
              Подробнее
            </Link>
          </div>
          <div className="services__item d-flex flex-column align-items-center my-5">
            <img src={services_icon_3} alt="services icon" className="services-icon" />
            <h3 className="services-block__description">
              Заявление об&nbsp;установлении факта принятия наследства
            </h3>
            <Link to="" className="services__item-link">
              Подробнее
            </Link>
          </div>
          <div className="services__item d-flex flex-column align-items-center my-5">
            <img src={services_icon_4} alt="services icon" className="services-icon" />
            <h3 className="services-block__description">
              Разработка проекта договора
            </h3>
            <Link to="" className="services__item-link">
              Подробнее
            </Link>
          </div>
          <div className="services__item d-flex flex-column align-items-center my-5">
            <img src={services_icon_5} alt="services icon" className="services-icon" />
            <h3 className="services-block__description">
              Подготовка претензий
            </h3>
            <Link to="" className="services__item-link">
              Подробнее
            </Link>
          </div>
          <div className="services__item d-flex flex-column align-items-center my-5">
            <img src={services_icon_6} alt="services icon" className="services-icon" />
            <h3 className="services-block__description">
              Ведение договорной работы
            </h3>
            <Link to="" className="services__item-link">
              Подробнее
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

const DesktopVideo = () => {
    return (
        <section>
        <Container>
          <h2 className="content__title--color-satingold mx-auto text-center">
            Видео
          </h2>
          {/* .video-block>video.video+.video-info>h3.video__title+p.video-description+Link[to=""]>img.video_link-icon+p.video_link-text */}
          <Row className="desktop-video-block pb-5 d-flex justify-content-between">
            <Col md={6} className="pt-4">
              {/* <video src="" className="desktop-video"></video> */}
              <img src={video} alt="video" />
            </Col>
            <Col md={6} className="desktop-video-info pt-4">
              <h3 className="desktop-video__title satin-sheen-gold text-center">
                О компании
              </h3>
              <p className="desktop-video-description">
                SBSB&nbsp;&mdash; одна из&nbsp;сильнейших юридических фирм
                в&nbsp;СНГ и&nbsp;Европе, консультирующая по&nbsp;вопросам
                в&nbsp;области FinTech. Мы&nbsp;углубленно занимаемся двумя
                направлениями: FinTech и&nbsp;налоговое право. Это позволяет
                нашей команде быть квалифицированными и&nbsp;опытными
                специалистами именно в&nbsp;этих сферах.
              </p>
              <Link to="" className="d-flex">
                <img
                  src={youtube_icon}
                  alt="youtube"
                  className="desktop-video_link-icon"
                />
                <h5 className="desktop-video_link-text">YouTube Channel</h5>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

    );
}

const DesktopNews = (props) => {
    return (
        <section className="background--color-blackhaze pb-5">
        <Container>
          <h2 className="content__title--color-satingold mx-auto text-center">
            Новости
          </h2>
          {/* .news>.news-list>.news-list__item*3>img.news-list__item-img+p.news-list__item-text^^.news-main>.news-main-description */}
          <Row className="news mt-5 d-flex justify-content-between">
            <Col md={4} className="order-lg-1  order-sm-2 pt-4">
              <ListGroup className="news-list">
                <ListGroup.Item className="news-list__item d-flex align-items-center">
                  <Row>
                    <Col>
                      <Image
                        src={news_1}
                        className="news-list__item-img mr-4"
                      />
                    </Col>
                    <Col>
                      <p className="news-list__item-text">{props.newsFirst}</p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="news-list__item d-flex align-items-center">
                  <Row>
                    <Col>
                      <Image
                        src={news_2}
                        className="news-list__item-img mr-4"
                      />
                    </Col>
                    <Col>
                      <p className="news-list__item-text">
                        PISP и AISP: новые возможности для необанков?{" "}
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="news-list__item d-flex align-items-center">
                  <Row>
                    <Col>
                      <Image
                        src={news_3}
                        className="news-list__item-img mr-4"
                      />
                    </Col>
                    <Col>
                      <p className="news-list__item-text">
                        Онлайн-сессия CEO SBSB
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={8} className="news-main order-lg-2 order-sm-1 pt-4">
              <Image src={main_news} />
              <div className="news-main-description"></div>
            </Col>
          </Row>
        </Container>
      </section>

    );
}

const DesktopPage = (props) => {
  return (
    <main>
      <DesktopMainContent />
      <DesktopServices />
      <ClientsSlider />
      <DesktopVideo/>
          <DesktopNews newsFirst={ props.newsFirst }/>
      <AwardsSlider />
      <ApplicationSection />
    </main>
  );
};

export default DesktopPage;
