import React from "react";
import { Container, Breadcrumb, Card, Carousel } from "react-bootstrap";
import "./LawyersList.css";

const LawyersList = () => {
  return (
    <main className="background--color-light-blackhaze">
      <section>
        <Container fluid>
          <Breadcrumb>
            <Breadcrumb.Item className="content-link black" href="/">
              Главная
            </Breadcrumb.Item>
            <Breadcrumb.Item className="content-link" active>
              Список юристов
            </Breadcrumb.Item>
          </Breadcrumb>
          <Card className="pl-3 background--color-light-blackhaze">
            <h1 className="office-title">Список юристов</h1>
          </Card>
          <Carousel>
            <div className="lawyers-carousel__item">1</div>
            <div className="lawyers-carousel__item">2</div>
            <div className="lawyers-carousel__item">3</div>
            <div className="lawyers-carousel__item">4</div>
          </Carousel>
        </Container>
      </section>
    </main>
  );
};

export default LawyersList;
