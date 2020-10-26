import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Template.css';
import { render } from '@testing-library/react';
import HeaderPage from './Components/HeaderPage';
import FooterPage from './Components/FooterPage';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


import { DesktopContent } from './Components/Content/DesktopContent';
import { PersonalAreaContent } from './Components/Content/PersonalAreaContent';
import { CompanyContent } from './Components/Content/CompanyContent';
import { ContactsContent } from './Components/Content/ContactsContent';
import { ServicesContent } from './Components/Content/ServicesContent';

export default class Template extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <HeaderPage />
                    <Switch>
                        <Route exact path="/" component={DesktopContent} />
                        <Route path="/personal-area" component={PersonalAreaContent} />
                        <Route path="/company" component={CompanyContent} />
                        <Route path="/contacts" component={ContactsContent} />
                        <Route path="/services" component={ServicesContent} />
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
