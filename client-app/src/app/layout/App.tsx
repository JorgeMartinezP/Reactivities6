import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Activity } from '../models/Activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

const App = () => {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data)
      });
  },[]);

  return (
    <>
      <NavBar/>

      <Container style={{marginTop: '7em' }}>
        <ActivityDashboard activities={activities}/>
        </Container>
    </>
  );
}

export default App;
