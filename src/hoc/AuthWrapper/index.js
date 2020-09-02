
import React from 'react';
import { withRouter } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    cursor: 'pointer',
    backgroundColor: theme.palette.background.default,
  },
  rect: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    top: '50%',
    width: `calc(100% - ${theme.spacing(4)}px)`,
    padding: `${theme.spacing(3.5)}px ${theme.spacing(5)}px`,
    background: theme.palette.background.default,
    boxShadow: '0px 0px 7px #5556AB29',
    borderRadius: theme.spacing(3 / 8),
    [theme.breakpoints.up('sm')]: {
      width: 560
    },
  },
  smallRect: {
    [theme.breakpoints.up('sm')]: {
      width: 500,
      height: 534
    },
  },
  appLogo: {
    cursor: 'pointer',
    margin: `0 auto`,
  },
  imageContainer: {
    display: 'flex'
  },
  lazyImage: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover',
    objectPosition: 'left'
  },
  CloseIcon: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: 0,
    margin: '17px',
  }
}));

const formStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  center: {
    alignItems: 'center',
    textAlign: 'center'
  },
  topSmallSpacing: {
    marginTop: theme.spacing(2)
  },
  sigInUp: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '0.6px',
    fontFamily: 'Muli-SemiBold',
    fontWeight: 600,
  },
  oneLine: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightAlign: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  forgotPassword: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto'
  },
  orButtonContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  divider: {
    backgroundColor: theme.custom.palette.textInputBorder,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '45%'
  },
  fgButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '5px',
    paddingLeft: '5px'
  },
  pairButton: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '180px',
    height: '45px',
  },
  iconContainer: {
    width: '100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: '45px',
    lineHeight: '18px'
  },
  fontCustom: {
    fontSize: '17px'
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyItems: 'center',
    letterSpacing: '0.42px'
  },
  fullNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameTextInput: {
    maxWidth: theme.spacing(25)
  },
  linkText: {
    color: theme.custom.palette.blue,
    fontWeight: 600,
    fontSize: '17px'
  }
}));

const AuthWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.imageContainer}>
      <LazyLoadImage
        className={classes.lazyImage}
        effect="blur"
        src={'/assets/images/background.jpg'} >
      </LazyLoadImage>
      <div className={clsx(classes.rect, classes.smallRect)}>
        <CloseIcon fontSize='small' className={classes.CloseIcon} />
        {children}
      </div>
    </div>
  );
};

export { formStyles };
export default withRouter(AuthWrapper);