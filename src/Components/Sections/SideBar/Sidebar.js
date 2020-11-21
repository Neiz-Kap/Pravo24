import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';

import chats from '../../../Image/sideBar_icon/chats.svg';
import lawyers from '../../../Image/sideBar_icon/lawyers.svg';
import settings from '../../../Image/sideBar_icon/settings.svg';
import out from '../../../Image/sideBar_icon/out.svg';

export default class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            numberMessages: '6',
        }
    }
    render() {
        return (
            <aside className="sidebar">
                <Nav defaultActiveKey="/lawyers_list" className="sidebar-wrapper">
                    <Nav.Link href="/chat" className="position-relative">
                        <img src={ chats } className="sidebar-icon"/>
                        <p className="sidebar-chats-number">
                            {this.state.numberMessages}
                        </p>
                    </Nav.Link>
                    <Nav.Link href="/lawyers_list">
                        <img src={ lawyers } className="sidebar-icon"/>
                    </Nav.Link>
                    <Nav.Link onClick="">
                        <img src={ settings } className="sidebar-icon"/>
                    </Nav.Link>
                    <Nav.Link onClick="">
                        <img src={ out } className="sidebar-icon"/>
                    </Nav.Link>
                </Nav>
            </aside>
        )
    }
}
