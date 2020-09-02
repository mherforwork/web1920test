
import 'typeface-roboto';
import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';

import theme from 'styles/theme';
import { AppContext } from 'contexts';
import { PAGES } from 'utils/links/pages';

const DELAY_TIME = 100;

const SignIn = loadable(() => pMinDelay(import('containers/Auth/SignIn'), DELAY_TIME));
const SignUp = loadable(() => pMinDelay(import('containers/Auth/SignUp'), DELAY_TIME));
const SignOut = loadable(() => pMinDelay(import('containers/Auth/SignOut'), DELAY_TIME));

const App = () => {

  return (
    <AppContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route render={() => (
              <Switch>
                <Route exact path={PAGES.SIGN_IN} component={SignIn} />
                <Route exact path={PAGES.SIGN_UP} component={SignUp} />
                <Route exact path={PAGES.SIGN_OUT} component={SignOut} />
                <Redirect to={PAGES.SIGN_IN} />
              </Switch>
            )} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </AppContext.Provider>
  )
};

export default App;
