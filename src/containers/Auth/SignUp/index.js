
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';

import AuthWrapper, { formStyles } from 'hoc/AuthWrapper';
import LpLink from 'components/UI/LpLink';
import ContainedButton from 'components/UI/Buttons/ContainedButton';
import OutlinedTextField from 'components/UI/OutlinedTextField';
import FacebookIcon from 'components/Icons/FackbookIcon';
import GoogleIcon from 'components/Icons/GoogleIcon';
import { useForm } from 'utils/hooks';

const SignUp = ({ history }) => {
  const theme = useTheme();
  const formClasses = formStyles();
  const [beforeSubmit, setBeforeSubmit] = useState(true);
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
          Sign Up
        </Typography>
        <div className={formClasses.fullNameContainer}>
          <OutlinedTextField
            name='fristName'
            placeholder='First Name'
            value={inputs.fristName || ''}
            error={!beforeSubmit && !inputs.fristName}
            onChange={inputChangeHandler}
            className={formClasses.nameTextInput}
          />
          <OutlinedTextField
            name='lastName'
            placeholder='Last Name'
            value={inputs.lastName || ''}
            error={!beforeSubmit && !inputs.lastName}
            onChange={inputChangeHandler}
            className={formClasses.nameTextInput}
          />
        </div>
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
        <ContainedButton
          type='submit'
          backgroundColor={theme.custom.palette.blue}
          className={formClasses.loginButton}>
          <Typography className={formClasses.fontCustom} variant='h6'>
            Sign Up
          </Typography>
        </ContainedButton>
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
          <Typography variant='subtitle1' className={formClasses.fontCustom}>Already have an account? </Typography>
          <LpLink href='/'> <Typography variant='subtitle1' className={formClasses.fontCustom}> Login </Typography></LpLink>
        </div>
      </form>
    </AuthWrapper>
  );
};

export default SignUp;
