import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TopBar from './TopBar';
import CalendarView from './Calendar/CalendarView';
import SidebarView from './Sidebar/SidebarView';
import NavDrawer from './NavDrawer';

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
        <Grid container>
          <Grid item md={9} sm={12} xs={12} className={classes.calendar}>
            <CalendarView />
          </Grid>

          <Grid item md={3} sm={12} xs={12}>
            <SidebarView />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { App as UnstyledApp };

export default withStyles(styles)(App);
