
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  checkbox: {
    '& svg': {
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    color: theme.custom.palette.textInputBorder,
    height: '11px'
  }
}));

const LPronetCheckbox = ({ label, value = false, onChange = () => { } }) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <Checkbox
          className={classes.checkbox}
          color='secondary'
          checked={value}
          inputProps={{
            'aria-label': 'terms of service',
          }}
          onChange={onChange} />
      }
      label={label} />
  );
};

export default LPronetCheckbox;
