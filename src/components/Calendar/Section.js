import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getDurationInHours, getFormattedClassEvent } from 'util/time';


export const MAX_WIDTH_PERCENT = 97;

export const styles = {
  paper: {
    position: 'absolute',
    top: ({ section }) => {
      const minute = section.event.start.minute;
      const offset = Math.round(minute / 60 * 100);
      return `${offset}%`;
    }, 
    left: ({ section }) => `${MAX_WIDTH_PERCENT * section.columnWidth * section.column}%`,
    height: ({ section }) => {
      const durationInHours = getDurationInHours(section.event);
      const heightInPercent = Math.round(durationInHours * 100);
      return `${heightInPercent}%`;
    },
    width: ({ section }) => `${MAX_WIDTH_PERCENT * section.columnWidth}%`,
    backgroundColor: ({ section }) => section.color,
    overflow: 'hidden',
  },
  container: {
    margin: '3px',
  },
  text: {
    color: 'white',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  modal: {
    position: 'absolute',
    width: '450px',
    outline: 'none',
    top: '12.5%',
    left: '12.5%',
    padding: '10px',
  },
};

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
    };
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  toggleDialog() {
    const { showDialog } = this.state;
    this.setState({
      showDialog: !showDialog,
    });
  }

  render() {
    const { classes, section } = this.props;
    const { showDialog } = this.state;
    return (
      <div>
        <Paper className={classes.paper} onClick={this.toggleDialog}>
          <div className={classes.container}>
            <div className={classes.header}>
              <Typography variant="caption" className={classes.text}>
                {getFormattedClassEvent(section.event)}
              </Typography>

              <Typography variant="caption" className={classes.text}>
                {`${section.subjectId} ${section.courseId}`}
              </Typography>
            </div>

            <Typography variant="subtitle2" className={`${classes.text} ${classes.name}`} noWrap>
              {section.name}
            </Typography>
          </div>
        </Paper>
        <Dialog
          open={showDialog}
          onClose={this.toggleDialog}
          aria-labelledby="simple-dialog-title"
          aria-describedby="simple-dialog-description"
        >
          <Paper className={classes.dialog}>
            <Typography variant="h5">
              {`${section.subjectId} ${section.courseId} Section ${section.sectionNumber}`}
            </Typography>
          </Paper>
          <DialogActions>
            <Button onClick={this.toggleDialog}> Remove </Button>
            <Button onClick={this.toggleDialog}> Cancel </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Section.propTypes = {
  section: PropTypes.objectOf(PropTypes.any).isRequired, // TODO
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export { Section as UnstyledSection };
export default withStyles(styles)(Section);
