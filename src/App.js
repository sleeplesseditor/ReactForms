import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LazyLoader from './components/LazyLoader/LazyLoader';
import './App.scss';
import Menu from './components/Menu/Menu';
import { ReactComponent as CaretIcon } from './components/Menu/Icons/caret.svg';

const GenericVariantPage = React.lazy(() => import('./pages/GenericVariantPage/GenericVariantPage'));
const BasicFormikVariantPage = React.lazy(() => import('./pages/FormikVariants/BasicFormikVariantPage/BasicFormikVariantPage'));
const BasicRHFVariantPage = React.lazy(() => import('./pages/ReactHookFormVariants/BasicRHFVariant/BasicRHFVariantPage'));

function App() {
  return (
    <Router>
      <Menu navIcon={<CaretIcon />} title={'React Form Examples'} />
      <Switch>
        <Route exact path="/" component={LazyLoader(GenericVariantPage)} />
        <Route exact path="/basic-formik" component={LazyLoader(BasicFormikVariantPage)} />
        <Route exact path="/basic-rhf" component={LazyLoader(BasicRHFVariantPage)} />
      </Switch>
    </Router>
  );
}

export default App;