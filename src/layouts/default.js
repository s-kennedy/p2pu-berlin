import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import withRoot from '../utils/withRoot';

import Notification from "../components/notifications/Notification";
import AccountButton from "../components/navigation/AccountButton"
import Navigation from "../components/navigation/Navigation"
import Footer from "../components/common/Footer"

import {
  EditablesContext,
  theme
} from 'react-easy-editables';

import "p2pu-theme/dist/base.css";
import "p2pu-input-fields/dist/build.css"
import "../assets/sass/less-cms/base.scss";

import favicon from '../assets/images/favicon.ico'


const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: '1'
  }
}

const mapStateToProps = state => {
  return {
    isEditingPage: state.adminTools.isEditingPage,
  };
};


const DefaultLayout = props => (
  <div style={styles.container}>
    <Helmet>
      <title>
        P2PU Berlin
      </title>
      <meta
        charSet="utf-8"
        description="Simple and flexible CMS for static sites"
        keywords="static site, CMS, React, Gatsby"
        viewport="width=device-width,initial-scale=1.0,maximum-scale=1"
      />
      <link rel="icon" href={favicon} type="image/x-icon" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </Helmet>
    <Notification />
    <AccountButton />
    <Navigation />

    <EditablesContext.Provider value={ { theme: theme, showEditingControls: props.isEditingPage } }>
      <main className="page-content">
        <div className="wrap">
          <Fragment>{props.children}</Fragment>
        </div>
      </main>
    </EditablesContext.Provider>
    <Footer />
  </div>
);

export default withRoot(connect(mapStateToProps, null)(DefaultLayout));


