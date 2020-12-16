import React from 'react';
import { Container } from 'react-bootstrap';
import './../Chats.css';

import CallPerson from './CallPerson';
import CallManagement from './CallManagement';

import VideoPerson from './VideoPerson';

class Call extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCall: true,
            name: 'Николай',
            personUrl: '',
            // почитай об setInterval
            realTime: '12:56',
            // class for style image users
            // 'call--type-video'
            typeCall: 'video',
        }
    }

/*
    получаю с сервера
    статус звонка(isCall),
    имя собеседника (name),
    ссылка на картинку (personUrl),
*/
    render() {
        return (
            // <main>
                <section>
                    <Container fluid className="videocall__container h-100vh">
                        <span className="py-3 call__title">{this.state.typeCall == 'audio' ? 'Право24' : this.state.name}</span>
                        {this.state.typeCall == 'audio' ?
                            // передадим сюда ссылку на фото и имя собеседника
                            <div className={`mx-auto ${this.state.typeCall} videocall__wrap w-100`}>
                                <CallPerson name={this.state.name} typeCall={this.state.typeCall} />
                                <CallManagement realTime={this.state.realTime} isCall={this.state.isCall}/>
                            </div>
                            :
                            <div className={`mx-auto ${this.state.typeCall}`}>
                                <VideoPerson />
                                <CallManagement realTime={this.state.realTime} isCall={this.state.isCall}/>
                            </div>
                        }
                    </Container>
                </section>
            // </main>
        );
    }
}

export default Call;
