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


import { DesktopContent } from './Components/Pages/DesktopPage';
import { PersonalAreaContent } from './Components/Sections/PersonalAreaContent';
import { CompanyPage } from './Components/Pages/CompanyPage';
import { ContactsContent } from './Components/Sections/ContactsContent';
import { ServicesContent } from './Components/Sections/ServicesContent';
import { PartnersContent } from './Components/Sections/PartnersContent';

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
