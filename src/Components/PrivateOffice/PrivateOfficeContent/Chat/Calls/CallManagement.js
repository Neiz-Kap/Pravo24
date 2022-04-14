import React from "react";
import { Button, Badge, Image, Row, Col } from 'react-bootstrap';
import './../Chats.css';


const CallManagement = (props) => {

  // let buttomMicroRef = React.createRef();

  // const clickButtonMicro = () => {
  //   buttomMicroRef.classList.add("call_micro--active");
  // }

const changeIsCall = () => {
  // меняем в state isCall
  // сбрасываем звонок
  // запускаем таймер на 5 секунд
}

// буду получать через state состояние микрофона и добавлять класс, на котором повешены стили и перечёркивание

  return (
    <div className="call__manag d-flex flex-column align-items-center mt-4">
      <Badge variant="dark" className="px-4">{props.durationCall}</Badge>
      {props.isCall ?

        <Row className="mt-4 position-relative call__list w-100 justify-content-between">
          <Col className="col-4 call__item">
            <button
            type="button"
            className="btn btn-secondary call__btn call__btn--type-managment avatar-sm rounded-circle call__micro call_btn--active"
            // ref={buttomMicroRef}
            >
              <div className="call__icon call__icon--type-micro call_btn--active"></div>
            </button>
            <span className="text-muted call__text">Заглушить</span>
          </Col>
          <Col className="col-4 call__item">
            <button
            type="button"
            className="btn btn-secondary call__btn call__btn--type-managment avatar-sm rounded-circle call_btn--active" >
              <div className="call__icon call__icon--type-camera"></div>
            </button>
            <span className="text-muted call__text">Включить <br/> камеру</span>
          </Col>
          <Col className="col-4 call__item">
            <button
            type="button"
            className="btn btn-danger call__btn avatar-sm rounded-circle"
            // onClick={changeIsCall()}
            // при клике меняем isCall и сбрасываем звонок
            >
              <div className="call__icon call__icon--type-hungup"></div>
            </button>
            <span className="text-muted call__text">Завершить <br/> звонок</span>
          </Col>

          <Col className="position-absolute d-none">
            <button type="button" className="btn btn-danger call__btn avatar-sm rounded-circle" >
              <div className="call__icon call__icon--type-hungup"></div>
            </button>
            <span className="text-muted">Заглушить</span>
          </Col>
        </Row>
      :
        <div className="chat-wrapper mt-3">
          <span className="text-muted call__text">Звонок закончен</span>
        </div>
        }
    </div>
  );
};

export default CallManagement;
