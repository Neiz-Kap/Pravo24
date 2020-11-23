import React, {
    Component
} from 'react'

import './Chats.css';
import { Container, ListGroup, Row, Col, Form, Card, Breadcrumb, Image } from 'react-bootstrap';

import avatar from '../../../Image/PersonalAreaContent/avatar.png';

export default class Chats extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: 'Сидоров Женя',
            chatMessage: 'Привет! Хочу предложить сотрудничество твоей компании. Будем зарабатывать много денег!',
            date: 'message',
        }
        // this.handleEvent = this.handleEvent.bind(this);
    }

    render() {
        return ( 
        <main>
            <section>
                <Container>
                <Row class="no-gutters">
                        <div class="col-md-4 border-right">
                            <div class="settings-tray">
                                <img class="profile-image"
                                    src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/filip.jpg"
                                    alt="Profile img" />
                                <span class="settings-tray--right">
                                    <i class="material-icons">cached</i>
                                    <i class="material-icons">message</i>
                                    <i class="material-icons">menu</i>
                                </span>
                            </div>
                            <div class="search-box">
                                <div class="input-wrapper">
                                    <i class="material-icons">search</i>
                                    <input placeholder="Search here" type="text" />
                                </div>
                            </div>
                            <div class="friend-drawer friend-drawer--onhover">
                                <img class="profile-image"
                                    src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt="" />
                                <div class="text">
                                    <h6>Robo Cop</h6>
                                    <p class="text-muted">Hey, you're arrested!</p>
                                </div>
                                <span class="time text-muted small">13:21</span>
                            </div>
                            <hr />
                        </div>
                        <div class="col-md-8">
                            <div class="settings-tray">
                                <div class="friend-drawer no-gutters friend-drawer--grey">
                                    <img class="profile-image"
                                        src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg" alt="" />
                                    <div class="text">
                                        <h6>Robo Cop</h6>
                                        <p class="text-muted">Layin' down the law since like before Christ...</p>
                                    </div>
                                    <span class="settings-tray--right">
                                        <i class="material-icons">cached</i>
                                        <i class="material-icons">message</i>
                                        <i class="material-icons">menu</i>
                                    </span>
                                </div>
                            </div>
                            <div class="chat-panel">
                                <div class="row no-gutters">
                                    <div class="col-md-3">
                                        <div class="chat-bubble chat-bubble--left">
                                            Hello dude!
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="col-md-3 offset-md-9">
                                        <div class="chat-bubble chat-bubble--right">
                                            Hello dude!
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="col-md-3 offset-md-9">
                                        <div class="chat-bubble chat-bubble--right">
                                            Hello dude!
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="col-md-3">
                                        <div class="chat-bubble chat-bubble--left">
                                            Hello dude!
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="col-md-3">
                                        <div class="chat-bubble chat-bubble--left">
                                            Hello dude!
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="col-md-3">
                                        <div class="chat-bubble chat-bubble--left">
                                            Hello dude!
                                        </div>
                                    </div>
                                </div>
                                <div class="row no-gutters">
                                    <div class="col-md-3 offset-md-9">
                                        <div class="chat-bubble chat-bubble--right">
                                            Hello dude!
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="chat-box-tray">
                                            <i class="material-icons">sentiment_very_satisfied</i>
                                            <input type="text" placeholder="Type your message here..." />
                                            <i class="material-icons">mic</i>
                                            <i class="material-icons">send</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </main>
        )  
    }
}
