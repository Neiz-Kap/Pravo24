import React from 'react'
import { Nav, Image } from 'react-bootstrap';

// export default class SideBar extends React.Component {
    // state = {
    //     numberMessages: "6",
    // }
    // render() {
export const SideBar = () => {

        return (
        // <nav>
        //     <ul>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //     </ul>
        // </nav>

        <Nav defaultActiveKey="/" className="flex-column">
            <Nav.Item>
                <Nav.Link href="/chat">
                        <Image/>
                        {/* src={} */}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/lawyers_list">
                        <Image/>
                        {/* src={} */}
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">
                    <Image/>
                    {/* src={} */}
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
    {/* } */}
}



