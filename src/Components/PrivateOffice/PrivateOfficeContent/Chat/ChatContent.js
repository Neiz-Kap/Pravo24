import React, {
    useState
} from 'react';
import {
    FullScreen,
    useFullScreenHandle
} from "react-full-screen";
// import ReactDOM from 'react-dom';
import {
    Col,
    Form,
    Modal,
    Button,
    Image
} from 'react-bootstrap';
import './Chats.css';

import avatar from '../../../../Image/PersonalAreaContent/avatar.png';
import phone_call from '../../../../Image/PersonalAreaContent/chats/phone-call.svg';
import video_call from '../../../../Image/PersonalAreaContent/chats/video-call.svg';
import more from '../../../../Image/PersonalAreaContent/chats/more.svg';
import attachment from '../../../../Image/PersonalAreaContent/chats/attachment.svg';
import sent from '../../../../Image/PersonalAreaContent/chats/sent.svg';

const MyVerticallyCenteredModal = (props) => (
    // ReactDOM.createPortal(
        <Modal
            {...props}
            className="modal-video"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            {/* <div className="modal-content"> */}
                <Modal.Body>
                    <div className="text-center p-4">
                        <div className="avatar-lg mx-auto mb-4">
                            <Image src = {avatar}
                            roundedCircle
                            className="img-thumbnail mx-auto"
                            alt = "avatar"
                             />
                        </div>

                        <h5 className="text-truncate text-white">Doris Brown</h5>
                        <p className="text-muted mb-0">Start Video Call</p>

                        <div className="mt-5">
                            <ul className="list-inline mb-1">
                                <li className="list-inline-item px-2">
                                    <button type="button" className="btn btn-danger avatar-sm rounded-circle"
                                    data-dismiss="modal"
                                    onClick={props.onHide}>
                                        <span className="avatar-title bg-transparent font-size-20">
                                            <i className="ri-close-fill"></i>
                                        </span>
                                    </button>
                                </li>
                                <li className="list-inline-item px-2">
                                    <button type="button" className="btn btn-success avatar-sm rounded-circle"
                                    onClick={`
                                    ${props.onHide}`} onSubmit={`${raiseInvoiceClicked()}`}>
                                        <span className="avatar-title bg-transparent font-size-20">
                                            <Image src={video_call} className="mx-auto"/>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
            {/* </div> */}
        </Modal>
    // ,
    //     document.getElementById("body")
    // )
);

const raiseInvoiceClicked = () => {
    // your axios call here
    // localStorage.setItem("pageData", "Data Retrieved from axios request")
    // route to new page by changing window.location
    const newPageUrl = "/chat/videoCall";
    // window.open(newPageUrl, "_blank") //to open new page
 }

const ChatHeader = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="chat-header border-bottom py-2 px-3">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column justify-content-center">
                    <div className="text-muted text-white">
                        {props.surName} {props.name}
                    </div>
                    <div className="text-status">
                        {props.status == 'online' ? 'В сети': 'Не в сети'}
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <a href="#">
                        <img src={ phone_call } alt="phone call"/>
                    </a>
                    <a href = "#"
                        className = "ml-2"
                        onClick = {
                        () => setModalShow(true)}>
                        <img src={video_call} alt="video call" />
                    </a>
                    <a href="#" className="ml-2"
                        onClick = {() => setModalShow(true)}>
                        <img src={ more } alt="more"/>
                    </a>
                    <MyVerticallyCenteredModal
                    show = {modalShow}
                    onHide = {() => setModalShow(false)}
                    className="modal-video"
                    />
                </div>
            </div>
        </div>
    )
}

const ChatBody = (props) => (
    <div className="chat-body ps">
        <ul className="messages">
            <li className="message-item friend">
                {/* <Image src={avatar} roundedCircle className="img-xs"
                alt="avatar"/> */}
                <div className="content">
                    <div className="message mb-3">
                        <div className="pl-3 mb-1 d-flex justify-content-between">
                            <span className="message-name">{props.name}</span>
                            <span className="message-time">8:17 PM</span>
                        </div>
                        <div className="bubble">
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                        </div>
                    </div>
                </div>
            </li>
            <li className="message-item me">
                {/* <Image src={avatar} roundedCircle className="img-xs"
                    alt="avatar"/> */}
                <div className="content">
                    <div className="message mb-3">
                        <div className="pl-3 mb-1 d-flex justify-content-between">
                            <span className="message-name">Вы</span>
                            <span className="message-time">8:17 PM</span>
                        </div>
                        <div className="bubble">
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry printing and typesetting industry.
                            </p>
                        </div>
                        <span className="mt-2 message-read">Просмотрено</span>
                    </div>
                    <div className="message mb-3">
                        <div className="ml-auto max-content">
                            <div className="pl-3 mb-1 d-flex justify-content-between">
                                <span className="message-name">Вы</span>
                                <span className="message-time">8:17 PM</span>
                            </div>
                            <div className="bubble">
                                <p className="text-muted">Lorem Ipsum.</p>
                            </div>
                            <span className="mt-2 ml-3 message-read">Просмотрено</span>
                        </div>
                    </div>
                </div>
            </li>
            <li className="message-item friend">
                {/* <Image src={avatar} roundedCircle className="img-xs"
                alt="avatar"/> */}
                <div className="content">
                    <div className="message">
                        <div className="pl-3 mb-1 d-flex justify-content-between">
                            <span className="message-name">{props.name}</span>
                            <span className="message-time">8:17 PM</span>
                        </div>
                        <div className="bubble">
                            <p className="text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
);

const ChatFooter = () => (
    <div className="chat-footer d-flex">
        <div className="d-none d-md-block">
            <button type="button" className="btn border btn-icon rounded-circle mr-2 d-flex" data-toggle="tooltip" title=""
                data-original-title="Attatch files">
                <img src={attachment} className="m-auto" alt="attachment" />
            </button>
        </div>
        <Form className="search-form flex-grow mr-2 w-100">
            <div className="input-group">
                <Form.Control type="text" className="rounded-pill" id="chatForm" placeholder="Type a message" />
            </div>
        </Form>
        <div>
            <button type="button" className="btn btn-icon rounded-circle d-flex">
                <img src={sent} className="m-auto" alt="sent" />
            </button>
        </div>
    </div>
);

const ChatContent = (props) => {
    return (
        <Col lg={8} className="chat-content border-left">
            <ChatHeader
                name={props.name}
                surName={props.surName}
                status={props.status}
            />
            <ChatBody name={props.name}/>
            <ChatFooter/>
        </Col>
    )
}

export default ChatContent;
