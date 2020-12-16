import React from 'react';
import {Col, Container, Row, Image} from 'react-bootstrap';

import employee from '../../../../../Image/PersonalAreaContent/chats/call/employee.jpg'
import me from '../../../../../Image/PersonalAreaContent/chats/call/me.jpg'

const VideoPerson = () => {
    return (
        <Container fluid className="mx-auto">
            <div className="d-flex justify-content-between">
                <Image src={employee}
                className="videocall__photo"
                rounded/>
                <Image src={me}
                className="videocall__photo"
                rounded/>
            </div>
        </Container>
    );
}

export default VideoPerson;
