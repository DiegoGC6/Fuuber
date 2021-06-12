import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './screens/home'
import LoggedIn from './screens/LoggedIn'
import Restaurant1 from './components/Restaurant1'


function App() {
  return (
    <>
      <Router >
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/logged' exact component={LoggedIn} />
            <Route path='/restaurant1' exact component={Restaurant1} />
          </Switch>  
      </Router>
    </>        
  );
}

export default App;
