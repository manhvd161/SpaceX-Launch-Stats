import React from 'react';
import './App.css';
import logo from './logo.jpg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <h1>
            <img
              src={logo}
              alt='SpaceX'
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
          </h1>
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
