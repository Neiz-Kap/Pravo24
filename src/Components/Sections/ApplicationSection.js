import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import './CallSection.css';

import google_play from '../../Image/applicationSection/google_play.jpg';
import app_store from '../../Image/applicationSection/app_store.jpg';

function ApplicationSection() {
    return (
        <section className="mb-5">
            <h2 className="content__title--color-satingold text-center">Приложение на смартфон</h2>
            <Row className="applications mx-auto">
                <Col><Image src={google_play}/></Col>
                <Col><Image src={app_store}/></Col>
            </Row>
        </section>
    );
}

export default ApplicationSection;
