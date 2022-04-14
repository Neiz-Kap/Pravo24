import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import './CallSection.css';

import google_play from '../../../Image/applicationSection/google_play.jpg';
import app_store from '../../../Image/applicationSection/app_store.jpg';

const ApplicationSection = () => {
    return (
        <section className="mb-5">
            <h2 className="content__title--color-satingold text-center">Приложение на смартфон</h2>
            <Row className="applications mx-auto">
                <Col className="pb-3 d-flex justify-content-center"><Image  src={google_play} className="mx-width-250"/></Col>
                <Col className="pb-3 d-flex justify-content-center"><Image  src={app_store} className="mx-width-250"/></Col>
            </Row>
        </section>
    );
}

export default ApplicationSection;
