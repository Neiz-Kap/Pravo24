import React, { Component } from 'react'

export default class postData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "firstName": "Андрей",
            "lastName": "Титаренко",
            "middleName": "Евгеньевич",
            "phone_number": "+380667164052",
            "password": "123456",
            "password_confirm": "123456"
        }
    }



    loadSignUpData = () => {
        let urlRegister = 'http://pravo.loc/api/register.php';
        let response = await fetch(urlRegister, {
            method: 'POST',
            header: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(this.state),
        });

        let result = await response.json();
        alert(result.message);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
