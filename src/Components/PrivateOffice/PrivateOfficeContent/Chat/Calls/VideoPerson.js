import React from 'react';
import {Col, Container, Row, Image} from 'react-bootstrap';

import employee from '../../../../../Image/PersonalAreaContent/chats/call/employee.png'
import me from '../../../../../Image/PersonalAreaContent/chats/call/me.png'

const VideoPerson = () => {
    return (
        <Container fluid className="mx-auto video__image">
            <div className="d-flex justify-content-around height-inherit">
                <Image src={employee}
                className="videocall__photo height-inherit"
                rounded/>
                <Image src={me}
                className="videocall__photo height-inherit"
                rounded/>
            </div>
        </Container>
    );
}

export default VideoPerson;
