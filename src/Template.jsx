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


<<<<<<< HEAD
import { DesktopContent } from './Components/Pages/DesktopPage';
import { PersonalAreaContent } from './Components/Sections/PersonalAreaContent';
import { CompanyPage } from './Components/Pages/CompanyPage';
import { ContactsContent } from './Components/Sections/ContactsContent';
import { ServicesContent } from './Components/Sections/ServicesContent';
import { PartnersContent } from './Components/Sections/PartnersContent';
=======
import { DesktopContent } from './Components/Content/DesktopContent';
import { PersonalAreaContent } from './Components/Content/PersonalAreaContent';
import { CompanyContent } from './Components/Content/CompanyContent';
import { ContactsContent } from './Components/Content/ContactsContent';
import { ServicesContent } from './Components/Content/ServicesContent';
import { PartnersContent } from './Components/Content/PartnersContent';
import { PasswordContent } from './Components/Content/PasswordContent';
>>>>>>> 89f2c77f211d77dcc25badc57ef218a062dc60d3

export default class Template extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <HeaderPage />
                    <Switch>
                        <Route exact path="/" component={DesktopContent} />
                        <Route path="/personal-area" component={PersonalAreaContent} />
                        <Route path="/company" component={CompanyPage} />
                        <Route path="/contacts" component={ContactsContent} />
                        <Route path="/services" component={ServicesContent} />
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
