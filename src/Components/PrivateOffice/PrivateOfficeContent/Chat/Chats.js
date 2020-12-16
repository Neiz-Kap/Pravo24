import React, {
    Component
} from 'react'

import './Chats.css';
import {
    Container,
    Row,
    Col,
    Form,
    Card,
    Breadcrumb,
    Image
} from 'react-bootstrap';

import avatar from '../../../../Image/PersonalAreaContent/avatar.png';
import search from '../../../../Image/PersonalAreaContent/chats/search.svg';

import ChatItem from './ChatItem';
import ChatContent from './ChatContent';
import Sidebar from '../../../General/SideBar/Sidebar';


const AsideHeader = () => (
    <header className="aside-header">
        <form className="search-form">
            <div className="input-group border rounded-sm">
                <div className="input-group-prepend">
                    <div className="input-group-text border-0 rounded-sm">
                        <img src={search} alt="search" />
                    </div>
                </div>
                <Form.Control type="text" className="border-0 rounded-sm" id="searchForm"
                    placeholder="Search here..." />
            </div>
        </form>
    </header>
);

const AsideBody = (props) => (
    <div className="aside-body">
        <ul className="nav nav-tabs mt-3" role="tablist"></ul>
        <div className="tab-content mt-3 ps">
            <div className="tab-pane fade active show" id="chats" role="tabpanel"
                aria-labelledby="chats-tab">
                <div className="ps">
                    {/* <p className="text-muted mb-1">Recent chats</p> */}
                    <ul className="list-unstyled chat-list px-1">
                        <ChatItem name={props.name[0]}
                            surName={props.surName[0]}
                            chatMessage={props.chatMessage[0]}
                            numberMessages={props.numberMessages[0]}
                            status={props.status[0]}
                        />
                        <li className="chat-item pr-1">
                            <a href="javascript:;" className="d-flex align-items-center">
                                <figure className="mb-0 mr-2">
                                    <Image src={avatar} roundedCircle
                                        className="img-xs" alt="user" />
                                    <div className="status offline"></div>
                                </figure>
                                <div
                                    className="py-2 d-flex justify-content-between flex-grow">
                                    <div>
                                        <p className="text-body">Carl Henson</p>
                                        <div className="d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                className="feather feather-image text-muted icon-md mb-2px">
                                                <rect x="3" y="3" width="18" height="18" rx="2"
                                                    ry="2"></rect>
                                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                <polyline points="21 15 16 10 5 21"></polyline>
                                            </svg>
                                            <p className="text-muted ml-1">Photo</p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-end">
                                        {/* <p className="text-muted tx-13 mb-1"></p> */}
                                        <div className="badge badge-pill badge-danger ml-auto">3
                                </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <ChatItem name={props.name[2]}
                            surName={props.surName[2]}
                            chatMessage={props.chatMessage[2]}
                            numberMessages={props.numberMessages[2]}
                            status={props.status[2]}
                        />
                    </ul>
                </div>
            </div>
            {/* other tabs */}
        </div>
    </div>
);

export default class Chats extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: [
                'Женя',
                'Обжора',
                'Начальника'
            ],
            surName: [
                'Сидоров',
                'Мистер',
                'Больна'
            ],
            chatMessage: [
                'Привет! Хочу предложить сотрудничество твоей компании. Будем зарабатывать много денег!',
                'Привет, Есть хочешь?',
                'Завтра Юристы припрут! Проект готов?'
            ],
            numberMessages: [6, 0, 3],
            status: ['online', 'offline', 'online'],
        }
    }

    render() {
        return (
        <main className="background--color-light-blackhaze">
            <section className="chat-section">
                <Container fluid="lg">
                    <Row>
                        <Col md={2}>
                            <Breadcrumb>
                                <Breadcrumb.Item className="content-link black" href="/">Главная</Breadcrumb.Item>
                                <Breadcrumb.Item className="content-link" active>Чат</Breadcrumb.Item>
                            </Breadcrumb>
                            <Card className="pl-3 background--color-light-blackhaze">
                                <h1 className="office-title">Чат</h1>
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row className="chat-wrapper">
                                <Col md={12}>
                                    <Card>
                                        <Card.Body>
                                            <Row className="position-relative border-left border-right">
                                            <Col lg={4} className="chat-aside border-lg-right d-flex flex-column justify-content-between">
                                                <div className="aside-content">
                                                    <AsideHeader/>
                                                    <AsideBody
                                                        name={this.state.name}
                                                        surName={this.state.surName}
                                                        chatMessage={this.state.chatMessage}
                                                        numberMessages={this.state.numberMessages}
                                                        status={this.state.status}
                                                    />
                                                </div>
                                                <Sidebar/>
                                            </Col>
                                            <ChatContent
                                                name={this.state.name[0]}
                                                surName={this.state.surName[0]}
                                                status={this.state.status[0]}
                                            />
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2} className="d-none d-lg-block"></Col>
                    </Row>
                </Container>
            </section>
        </main>
        );
    }
}

