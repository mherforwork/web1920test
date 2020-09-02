

import React from 'react';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    cursor: 'pointer',
    fontWeight: 400,
    padding: `0 ${theme.spacing(0.5)}px`,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      color: theme.custom.palette.blue
    }
  }
}));

const LpLink = ({ className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <div>
      <Link
        className={clsx(classes.root, className)}
        variant='caption'
        {...rest}>
        {children}
      </Link>
    </div>
  );
};

export default LpLink;
