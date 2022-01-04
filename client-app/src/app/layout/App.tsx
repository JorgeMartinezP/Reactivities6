import React  from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/Form/ActivityForm';
import { Route } from 'react-router-dom';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em' }}>
          <Route exact path='/' component={HomePage}/>
          <Route path='/activities' component={ActivityDashboard} />
          <Route path='/createActivity' component={ActivityForm} />
      </Container>
    </>
  );
}

export default observer(App);