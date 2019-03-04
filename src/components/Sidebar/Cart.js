import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { UnstyledSection } from '../Calendar/Section';

export const styles = {
  cartHeading: {
    padding: '16px',
  },
};

export const sectionStyles = section => (
  {
    paper: {
      position: 'static',
      backgroundColor: section.color,
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
  }
);

function Cart({ classes, sections }) {
  const uniqueSections = [];
  const usedIDs = [];

  sections.forEach(
    (section) => {
      if (!usedIDs.includes(section.id)) {
        usedIDs.push(section.id);
        uniqueSections.push(section);
      }
    },
  );

  const label = uniqueSections.length === 1 ? 'Class' : 'Classes';

  return (
    <div>
      <Typography variant="h5" className={classes.cartHeading}>
        {uniqueSections.length}
        {' '}
        {label}
      </Typography>
      {uniqueSections.map((section) => {
        const Section = withStyles(sectionStyles(section))(UnstyledSection);
        const key = `cart_${section.id}`;
        return (<Section key={key} section={section} />);
      })}
    </div>
  );
}

Cart.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Cart as UnstyledCart };
export default withStyles(styles)(Cart);
