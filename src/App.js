import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Discussion from './components/Discussion/Discussion';
import Login from './components/Login/Login';

function App() {
  
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/dashboard" component={Dashboard  }/>
         <Route path="/discussion" component={Discussion}/>
         <Route path="/" component={Login}/>
       </Switch>
      
     </Router>
    </div>
  );
}

export default App;
