import React from "react";
import { Card, Nav, Button,  Col, Row, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../Content/CompanyContent.css'


import Group from '../../Image/CompanyContent/Group.svg';
import Group2 from '../../Image/CompanyContent/Group2.svg';
import Group3 from '../../Image/CompanyContent/Group3.svg';
import Group4 from '../../Image/CompanyContent/Group4.svg';
import Group5 from '../../Image/CompanyContent/Group5.svg';
import review from '../../Image/CompanyContent/review.svg';


export const CompanyContent = () => (
  <>
    <Card className="fa-container">
      <div className="d-flex flex-column business-block">
        <h1 className="cares">Ваш бизнес. Наши заботы</h1>
        <p className="legal-description">
          Наша миссия: воплощать бизнес-
          идеи клиентов, преодолевая 
          юридические барьеры 
        </p>
      </div>
    </Card>
    <Card className="two-container">
      <h2 className="Why-we">Почему мы ?</h2>
      <div className="block-image">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
      </div>
      <div className="block-image">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
      </div>
    </Card>
  </>
);
