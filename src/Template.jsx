import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Template.css';
import { render } from '@testing-library/react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import HeaderPage from './Components/Pages/HeaderPage';
import FooterPage from './Components/Pages/FooterPage';

import DesktopPage from './Components/Pages/DesktopPage';
import CompanyPage from './Components/Pages/CompanyPage';
import { ServicesPage } from './Components/Pages/ServicesPage';
import { ContactsPage } from './Components/Pages/ContactsPage';
import { PartnersContent } from './Components/Sections/PartnersContent';

import PersonalAreaContent from './Components/PersonalArea/PersonalAreaContent';
import SignIn from './Components/PersonalArea/Form/SignIn';
import SignUp from './Components/PersonalArea/Form/SignUp';
import ResetPassPhone from './Components/PersonalArea/Form/RecoveryPassPhone';
import RecoveryPassCode from './Components/PersonalArea/Form/RecoveryPassCode';
import ResetPassword from './Components/PersonalArea/Form/ResetPassword';

import Chats from './Components/PersonalArea/PrivateOfficeContent/Chats';


import NotFound from './Components/Sections/Basic/NotFound';

// import { Sidebar } from './Components/Sections/SideBar';

export default class Template extends React.Component {
    constructor(props){
        super(props);

        // this.state = {
        //     numberMessages: "6",
        // }
    }

    render() {
        return (
            <>
                <Router>
                    <HeaderPage />
                    <Switch>
                        <Route exact path="/" component={DesktopPage} />
                        <Route path="/personalArea" component={PersonalAreaContent} />
                        <Route path="/company" component={CompanyPage} />
                        <Route path="/contacts" component={ContactsPage} />
                        <Route path="/services" component={ServicesPage} />
                        <Route path="/partners" component={PartnersContent} />

                        <Route path="/signUp" component={SignUp} />
                        <Route path="/signIn" component={SignIn} />
                        <Route path="/recoveryPhone" component={ResetPassPhone} />
                        <Route path="/recoveryCode" component={RecoveryPassCode} />
                        <Route path="/resetPassword" component={ResetPassword} />
                        
                        <Route path="/chat" component={Chats} />

                        <Route component={ NotFound } />
                        {/* <SideBar numberMessages={this.state.numberMessages}/> */}
                    </Switch>
                    <FooterPage />
                </Router>
            </>
        );
    }
}


// function App() {
//   return (

//   );
// }

// export default App;
