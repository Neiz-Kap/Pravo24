import React from "react";
import { Image } from 'react-bootstrap';
import './../Chats.css';


import avatar from '../../../../../Image/PersonalAreaContent/avatar.png';
const CallPerson = (props) => {
  // debugger;
  return (
    <div className={`mx-auto d-flex flex-column align-items-center`}>
      <Image src={avatar} className="w-100" roundedCircle />
      <span className="call__title semibold-font">{props.name}</span>
    </div>
  );
};

export default CallPerson;
