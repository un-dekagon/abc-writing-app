import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages';
import Header from './components';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
};

export default App;