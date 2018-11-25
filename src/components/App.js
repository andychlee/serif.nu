import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import TopBar from './TopBar';
import NavDrawer from './NavDrawer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import FAQPage from './FAQPage';
import RegalPage from './RegalPage';
import ReportPage from './ReportPage';
import ContactPage from './ContactPage';

export const styles = {
  calendar: {
    overflow: 'auto',
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigationOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState(oldState => ({
      navigationOpen: !oldState.navigationOpen,
    }));
  }

  render() {
    const { classes } = this.props;
    const { navigationOpen } = this.state;

    return (
      <React.Fragment>
        <TopBar menuAction={this.toggleNav} />
        <NavDrawer isOpen={navigationOpen} closeFunc={this.toggleNav} />

        <Route
          exact
          path="/"
          render={props => (
            <HomePage {...props} classes={classes} />
          )}
        />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/report" component={ReportPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/regal" component={RegalPage} />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { App as UnstyledApp };

export default withStyles(styles)(App);
