import React, { Component, useState } from 'react'
import { Nav, Modal, Form, Row, Col, Button } from 'react-bootstrap';
import './Sidebar.css';

import chats from '../../../Image/sideBar_icon/chats.svg';
import lawyers from '../../../Image/sideBar_icon/lawyers.svg';
import settings from '../../../Image/sideBar_icon/settings.svg';
import out from '../../../Image/sideBar_icon/out.svg';

const ModalSettings = (props) => {
    // let notifications = () =>{
    //     notifications
    // }
    return(
      <Modal
        {...props}
        className="modal-settings"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-white" id="contained-modal-title-vcenter">
            Настройки
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className="modal-settings-form my-3 mx-auto">
                <Form.Group>
                    <Form.Label className="settings-label">Уведомления</Form.Label>
                    <Row>
                        <Col md={9}>
                            <Form.Control
                            className="settings-input"
                            type="text"
                            // value={notifications ? 'Включёны' : 'Отключены'}
                            readOnly/>
                        </Col>
                        {/* <Form.Check */}
                        <Col className="d-flex align-items-center">
                            <Form.Switch
                            id="custom-switch"
                            // onClick={() => {return notifications=!notifications; console.log(notifications)}}
                            />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="settings-label">Пароль</Form.Label>
                    <Row>
                    <Col md={8}>
                        <Form.Control
                        className="settings-input"
                        type="password"
                        />
                    </Col>
                    <Col>
                        <Button>Сменить</Button>
                    </Col>
                    </Row>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
};

const ModalOutAccount = (props) => {
    // let notifications = () =>{
    //     notifications
    // }
    return(
      <Modal
        {...props}
        className="modal-out"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="mt-3 ">
        <h4 className="text-muted text-center">Выход из аккаунта</h4>
        <p className="text-body text-center">
            Вы уверены в том,что хотите выйти из аккаунта?
        </p>
        </Modal.Body>
        <Modal.Footer>
            <Row className="w-100">
                <Col md={6} className="d-flex align-items-center">
                    <button
                    onClick={props.onHide}
                    className="w-100 text-center modal-out-button modal-out-button--left"
                    >Закрыть</button>
                </Col>
                <Col md={6}>
                    <button
                        className="w-100 text-center modal-out-button modal-out-button--right"
                    >Выйти из акаунта</button>
                </Col>
            </Row>
        </Modal.Footer>
      </Modal>
    );
};

const Sidebar = (props) => {
    const [modalSettingsShow, setModalSettingsShow] = useState(false);
    const [modalOutAccountShow, setModalOutAccountShow] = useState(false);
    return (
        <aside className="sidebar">
            <Nav defaultActiveKey="/lawyers" className="sidebar-wrapper">
                <Nav.Link href="/chat" className="position-relative">
                    <img src={ chats } className="sidebar-icon"/>
                    <p className="sidebar-chats-number">
                        {/* {this.state.numberMessages} */}
                        6
                    </p>
                </Nav.Link>
                <Nav.Link href="/lawyers">
                    <img src={ lawyers } className="sidebar-icon"/>
                </Nav.Link>
                <Nav.Link href="javascript:void(0)"
                onClick={() => setModalSettingsShow(true)}>
                    <img src={ settings } className="sidebar-icon"/>
                </Nav.Link>
                <Nav.Link href="javascript:void(0)"
                onClick={() => setModalOutAccountShow(true)}>
                    <img src={ out } className="sidebar-icon"/>
                </Nav.Link>
            </Nav>
            <ModalSettings
            show={modalSettingsShow}
            onHide={() => setModalSettingsShow(false)
            }
            />
            <ModalOutAccount
            show={modalOutAccountShow}
            onHide={() => setModalOutAccountShow(false)}
            />
        </aside>
    );
}

export default Sidebar;
