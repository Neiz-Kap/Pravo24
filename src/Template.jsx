import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "@testing-library/react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/General/Header/Header";
import Footer from "./Components/General/Footer/Footer";
import Sidebar from "./Components/General/SideBar/Sidebar";

import DesktopPage from "./Components/InfoPages/DesktopPage/DesktopPage";
import CompanyPage from "./Components/InfoPages/CompanyPage/CompanyPage";
import ServicesPage from "./Components/InfoPages/ServicesPage/ServicesPage";
import ContactsPage from "./Components/InfoPages/ContactsPage/ContactsPage";
import PartnersContent from "./Components/InfoPages/PartnersContent/PartnersContent";

import SignUp from "./Components/PrivateOffice/Forms/SignUp";
import SignIn from "./Components/PrivateOffice/Forms/SignIn";

import ResetPassPhone from "./Components/PrivateOffice/Forms/RecoveryPassPhone";
import RecoveryPassCode from "./Components/PrivateOffice/Forms/RecoveryPassCode";
import ResetPassword from "./Components/PrivateOffice/Forms/ResetPassword";

import PersonalAreaContent from "./Components/PrivateOffice/PrivateOfficeContent/PersonalAreacContent/PersonalAreaContent";

import Chats from "./Components/PrivateOffice/PrivateOfficeContent/Chat/Chats";
import Call from "./Components/PrivateOffice/PrivateOfficeContent/Chat/Calls/Call";
import LawyersList from "./Components/PrivateOffice/PrivateOfficeContent/LawyersList/LawyersList";

import NotFound from "./Components/NotFound";

export default class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          {/* {this.state.mainUrl != "/" || this.state.url != "/call" ? (
            <Header />
          ) : null}
          {this.state.isAuth ? <Sidebar /> : null} */}

          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <DesktopPage newsFirst="В США появится первый криптобанк" />
              )}
            />
            <Route path="/company" component={CompanyPage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/partners" component={PartnersContent} />

            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/recoveryPhone" component={ResetPassPhone} />
            <Route path="/recoveryCode" component={RecoveryPassCode} />
            <Route path="/resetPassword" component={ResetPassword} />

            <Route path="/personalArea" component={PersonalAreaContent} />
            <Route path="/chat" component={Chats} />
            <Route path="/call" component={Call} />


            <Route path="/lawyers" component={LawyersList} />

            <Route component={NotFound} />
          </Switch>
          {/* {this.state.mainUrl != "/" || this.state.mainUrl != "/call" ? (
            <Footer />
          ) : null} */}
        </Router>
      </>
    );
  }
}
