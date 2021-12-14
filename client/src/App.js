import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from '../src/components/Header.js'
import Saying from '../src/components/Saying.js'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Saying />
        </Route>
      </Switch>
      <NotificationCenter />
    </Router>
  );
}

export default App;
