import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Template.css';
import { render } from '@testing-library/react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import HeaderPage from './Components/Pages/HeaderPage';
import FooterPage from './Components/Pages/FooterPage';

import { DesktopPage } from './Components/Pages/DesktopPage';
import { CompanyPage } from './Components/Pages/CompanyPage';
import { ServicesPage } from './Components/Pages/ServicesPage';
import { ContactsPage } from './Components/Pages/ContactsPage';
import { PartnersContent } from './Components/Sections/PartnersContent';
import { PersonalAreaContent } from './Components/PersonalArea/PersonalAreaContent';

import SignUp from './Components/PersonalArea/SignUp';
import { PasswordRecoveryContent } from './Components/PersonalArea/PasswordRecoveryContent';
import { EnterTheCodeContent } from './Components/PersonalArea/EnterTheCodeContent';
import { RecoveryPasswordContent } from './Components/PersonalArea/RecoveryPasswordContent';

import { SideBar } from './Components/Sections/SideBar';

export default class Template extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            numberMessages: "6",
        }
    }

    render() {
        return (
            <>
                <Router>
                    <HeaderPage />
                    <Switch>
                        <Route exact path="/" component={DesktopPage} />
                        <Route path="/personal-area" component={PersonalAreaContent} />
                        <Route path="/company" component={CompanyPage} />
                        <Route path="/contacts" component={ContactsPage} />
                        <Route path="/services" component={ServicesPage} />
                        <Route path="/partners" component={PartnersContent} />

                        <Route path="/signUp" component={SignUp} />
                        <Route path="/recovery" component={PasswordRecoveryContent} />
                        <Route path="/code" component={EnterTheCodeContent} />
                        <Route path="/recopass" component={RecoveryPasswordContent} />

                        <SideBar numberMessages={this.state.numberMessages}/>
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
