import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Template.css';
import { render } from '@testing-library/react';
import HeaderPage from './Components/Pages/HeaderPage';
import FooterPage from './Components/Pages/FooterPage';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';



import { DesktopPage } from './Components/Pages/DesktopPage';
import { CompanyPage } from './Components/Pages/CompanyPage';
import { ServicesPage } from './Components/Pages/ServicesPage';
import { PasswordContent } from './Components/Sections/PasswordContent';
import { PersonalAreaContent } from './Components/Sections/PersonalAreaContent';
import { ContactsPage } from './Components/Pages/ContactsPage';
import { PartnersContent } from './Components/Sections/PartnersContent';

export default class Template extends React.Component {
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
                        <Route path="/password" component={PasswordContent} />
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
