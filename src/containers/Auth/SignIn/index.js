
import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import AuthWrapper, { formStyles } from 'hoc/AuthWrapper';
import LPronetCheckbox from 'components/UI/LPronetCheckbox';
import LpLink from 'components/UI/LpLink';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import OutlinedTextField from 'components/UI/OutlinedTextField';
import FacebookIcon from 'components/Icons/FackbookIcon';
import GoogleIcon from 'components/Icons/GoogleIcon';
import { PAGES } from 'utils/links/pages';
import { useForm } from 'utils/hooks';

const SignIn = ({ history }) => {
  const formClasses = formStyles();
  const [remember, setRemember] = useState(false);
  const [beforeSubmit, setBeforeSubmit] = useState(true);
  const theme = useTheme();

  const submitCallback = () => {
    setBeforeSubmit(false);
    if (!inputs.email || !inputs.password) {
      alert('Please fill the required fields');
      return;
    }
  };

  const { inputs, inputChangeHandler, submitHandler } = useForm(submitCallback);

  return (
    <AuthWrapper history={history}>
      <form onSubmit={submitHandler} className={formClasses.form}>
        <Typography variant='h5' className={formClasses.sigInUp}>
          Login
        </Typography>
        <OutlinedTextField
          name='email'
          placeholder='Email Address'
          value={inputs.email || ''}
          error={!beforeSubmit && !inputs.email}
          onChange={inputChangeHandler}
          className={formClasses.topSpacing}
        />
        <OutlinedTextField
          type='password'
          name='password'
          placeholder='Password'
          value={inputs.password || ''}
          error={!beforeSubmit && !inputs.password}
          onChange={inputChangeHandler}
          className={formClasses.topSpacing}
        />
        <div className={clsx(formClasses.oneLine, formClasses.topSpacing)}>
          <LPronetCheckbox
            value={remember}
            onChange={(event) => { setRemember(event.target.checked) }}
            label={<Typography variant='subtitle2' color='primary'>Remember me</Typography>}
          />
        </div>
        <ContainedButton
          type='submit'
          className={formClasses.loginButton}
          backgroundColor={theme.custom.palette.blue}>
          <Typography className={formClasses.fontCustom} variant='h6'>
            Login
          </Typography>
        </ContainedButton>
        <LpLink
          className={formClasses.forgotPassword}
          href={PAGES.FORGOT_PASSWORD}>
          <Typography variant='body2'>
            Forgot Password
          </Typography>
        </LpLink>
        <div className={formClasses.orButtonContainer}>
          <Divider className={formClasses.divider} orientation='horizontal' />
          <Typography variant='body1'>Or</Typography>
          <Divider className={formClasses.divider} orientation='horizontal' />
        </div>
        <div className={formClasses.fgButtonContainer}>
          <ContainedButton className={formClasses.pairButton}
            backgroundColor={theme.custom.palette.darkBlue}>
            <div className={formClasses.iconContainer}  >
              <FacebookIcon />
              <Typography variant='body1'>Facebook</Typography>
            </div>
          </ContainedButton>
          <ContainedButton className={formClasses.pairButton}
            backgroundColor={theme.custom.palette.lightRed}>
            <div className={formClasses.iconContainer}  >
              <GoogleIcon />
              <Typography variant='body1'> Google</Typography>
            </div>
          </ContainedButton>
        </div>
        <div className={formClasses.footerContainer}>
          <Typography className={formClasses.fontCustom} variant='subtitle1'>Don't have an account? </Typography>
          <LpLink href='sign-up'> <Typography className={formClasses.linkText} variant='subtitle1'> Sign Up </Typography></LpLink>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default SignIn;
