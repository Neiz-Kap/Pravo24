import React from "react";
import '../Content/ServicesContent.css';
import { Card, Nav, Button,  Col, Row, } from 'react-bootstrap';
import { Link } from "react-router-dom";

import contract from '../../Image/ServicesContent/contract.svg'
import Group from '../../Image/ServicesContent/Group.svg'
import Group1 from '../../Image/ServicesContent/Group1.svg'
import Group2 from '../../Image/ServicesContent/Group2.svg'
import inheritance from '../../Image/ServicesContent/inheritance.svg'
import Vector from '../../Image/ServicesContent/Vector.svg'





export const ServicesContent = () => {
    return (
        <Card className='Container-image'>
            <h1 className="service">Наши услуги</h1>
            <div className="d-flex justify-content-center">
                <p className="description">Мы помогаем юридически реализовать ваши супер идеи, от создания платежной системы, 
                биржи криптовалют до запуска международного банка. Наша основная задача - преодоление
                барьеров между правом и инновациями. 
            </p>
            </div>
            <div className="maps">
                <div className="map">
                    <img className="fa-Group" src={Group}  alt="Group" />
                    <p className="Statement-cancellation">Заявление о расторжении брака в судебном порядке</p>
                    <button className="detailed">ПОДРОБНЕЕ</button>
                </div>
                <div className="map">
                    <img className="fa-Vector" src={Vector}  alt="Vector" />
                    <p className="Statement-extraditions">Заявление на выдачу судебного приказа на взыскание алиментов на содержание детей</p>
                    <button className="detailed">ПОДРОБНЕЕ</button>
                </div>
                <div className="map">
                    <img className="fa-inheritance" src={inheritance}  alt="inheritance" />
                    <p className="Statement-establishments">Заявление об установлении факта принятия наследства.</p>
                    <button className="detailed">ПОДРОБНЕЕ</button>
                </div>
            </div>
            <div className="maps">
                <div className="map">
                    <img className="fa-contract" src={contract}  alt="contract" />
                    <p className="Development">Разработка проекта договора</p>
                    <button className="detailed">ПОДРОБНЕЕ</button>
                </div>
                <div className="map">
                    <img className="fa-Group1" src={Group1}  alt="Group1" />
                    <p className="claim">Подготовка претензий</p>
                    <button className="detailed">ПОДРОБНЕЕ</button>
                </div>
                <div className="map">
                    <img className="fa-Group2" src={Group2}  alt="Group2" />
                    <p className="Conduction">Ведение договорной работы</p>
                    <button className="detailed">ПОДРОБНЕЕ</button>
                </div>
            </div>
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
        </Card>
        
    );
};
