import React,{Component,Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch} from "react-router-dom";
import Route from "react-router-dom/Route";
import Registration from './Registration';
import Login from './Login';
import Home from './Home';

class App extends Component{

  render() {
    return (
      <Fragment>
      
      <Router>
      <Home />   
        <Switch>
        <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login} />
        />
                <Route path="/register" component={Registration} />
                <Route path="/user" exact render={
          () => {
            return (
<p className="form-wrapper">Welcome to my user web page</p>
            );
          }
        }/>
       </Switch>
      
      </Router>
      </Fragment>
    );
  }

}

export default App;
