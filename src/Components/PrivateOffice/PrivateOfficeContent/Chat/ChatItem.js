import React from 'react';
import { Image } from 'react-bootstrap';
import './Chats.css';

import avatar from '../../../../Image/PersonalAreaContent/avatar.png';
import photoIcon from '../../../../Image/PersonalAreaContent/chats/photoIcon.svg';

const ChatItem = (props) => {
    return (
            <li className="chat-item">
                <a href="javascript:;" className="d-flex align-items-center">
                    <figure className="mb-0 mr-2">
                        <Image src={avatar} roundedCircle
                        className="img-xs" alt="user"/>
                        <div className={`status ${props.status}`}></div>
                    </figure>
                    <div
                    className="py-2 d-flex justify-content-between flex-grow overflow-hidden">
                        <div className="mr-1 overflow-hidden">
                            <p className="text-body" title={`${props.name} ${props.surName}`}>{props.name} {props.surName}</p>
                            {/* <p className="text-muted tx-13 ml-1" title={props.chatMessage}>{props.chatMessage}</p> */}
                            <div class="d-flex align-items-center">
                                <img src={photoIcon} className="feather feather-image text-muted icon-md mb-2px" alt="photo icon"/>
                                <p class="text-muted ml-1">Photo</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <div className="badge badge-pill ml-auto px-2 py-1 rounded-circle text-white">{props.numberMessages}</div>
                        </div>
                    </div>
                </a>
            </li>

    );
}

export default ChatItem;
