import React,{Component,Fragment} from "react";
import Facebook from './Facebook';
import Google from './Google';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Redirect} from "react-router-dom";

class Login extends Component{
constructor(props){
  super(props);
  this.state={
    username:'',
    password:'',
    LoggedIn:false
  } 
this.submithandler=this.submithandler.bind(this);
this.onchange=this.onchange.bind(this);

if(localStorage.getItem('username') && localStorage.getItem('password'))
{
this.setState({
    LoggedIn:true
})
}

}
onchange=(event)=>{
this.setState({
	[event.target.placeholder]:event.target.value
})
  
}
submithandler(opt){
  console.log(this.state)
  sessionStorage.setItem({"username":this.state.name})
  sessionStorage.setItem({"password":this.state.password})
}

  render(){
  
    if(this.state.LoggedIn)
    {
return (<Redirect to='\' />)
    }
    else{
return(
<Fragment>
      <div class="container text-center">
<Facebook /><hr />
<Google />
</div>

  <div class="form-wrapper">
  <form onSubmit={this.submithandler}>
      <h1 className="fw1 text-center">Login here</h1>

      <div class="form-item">
                <input type="text" value={this.state.username} onChange={this.onchange}  placeholder="username" required /> 
    </div>
    
    <div class="form-item">
                <input type="password" onChange={this.onchange} value={this.state.password} placeholder="password" required/> 
    </div>
    
    <div class="button-panel">
                <input type="submit" class="button" value="Log In" /> 
    </div>

</form>
 
  <div class="reminder">
      <p>Not a member? <a href="/register">Sign up now</a></p>
      <p><a href="/">Forgot password?</a></p>
  </div>
</div>
 
</Fragment>
  
)
}
}
}
export default Login;