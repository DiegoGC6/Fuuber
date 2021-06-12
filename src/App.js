import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './screens/home'
import LoggedIn from './screens/LoggedIn'
import Restaurant1 from './screens/Restaurant1'
import Restaurant2 from './screens/Restaurant2'
import Restaurant3 from './screens/Restaurant3'
import Restaurant4 from './screens/Restaurant4'
import Restaurant5 from './screens/Restaurant5'


function App() {
  return (
    <>
      <Router >
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/logged' exact component={LoggedIn} />
            <Route path='/restaurant1' exact component={Restaurant1} />
            <Route path='/restaurant2' exact component={Restaurant2} />
            <Route path='/restaurant3' exact component={Restaurant3} />
            <Route path='/restaurant4' exact component={Restaurant4} />
            <Route path='/restaurant5' exact component={Restaurant5} />
          </Switch>  
      </Router>
    </>        
  );
}

export default App;
