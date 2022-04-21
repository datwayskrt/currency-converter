import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom"

import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyles';

const Routes = () => {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                </Switch>
            </BrowserRouter>
        </>
    );
  };
  
  export default Routes;