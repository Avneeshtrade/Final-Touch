import React,{Component,Fragment} from "react";
import './App.css';
//import {Redirect} from "react-router-dom";
import axios from "axios";
class Registration extends Component{
constructor(props){
  super(props);
this.state={
    name:'',
    email:'',
    password:''
}
//this.clearstate=this.clearstate.bind(this);
this.submithandler=this.submithandler.bind(this);
this.handleChange=this.handleChange.bind(this);
}

handleChange(event) {
          this.setState({
			  [event.target.name]:event.target.value
		  })
}



submithandler=()=>{
  console.log(this.state);
let payload={
  name:this.state.name,
  email:this.state.email,
  password:this.state.password
}

// axios.post('http://localhost:51937/api/values', {
//   name:this.state.name,
//   email:this.state.email,
//   password:this.state.password
// })
// .then(response => { 
// 	console.log(response)
// })
// .catch(error => {
//     console.log(error)
// });

 axios({
  method: 'POST',
  url: 'http://localhost:51937/api/values',
  data:JSON.stringify(payload),//JSON.stringify()
  headers: {
  'Content-Type': 'application/json',
  'Accept':'application/json'
  },
  success:(res)=>{
    if(res === true)
    {
  console.log("successfully Registered")
    }else{
      console.log("Unable to register")
    }
    
  },
  



})


this.setState({
  name:'',
  password:'',
  email:''
})
}
render(){
return (
<Fragment>
<div class="form-wrapper2">
  <form>
    <h1 className="fw1 text-center">Register here</h1>

    <div class="form-item">
                <input type="text"  name="name" onChange={this.handleChange} value={this.state.name}  placeholder="Enter your name"  required />
    </div>
    <div class="form-item">
                <input type="text"  name="password" onChange={this.handleChange} value={this.state.password}  placeholder="Enter the password"  required />
    </div>
    <div class="form-item">
                <input type="text"   name="email" value={this.state.email} onChange={this.handleChange} placeholder="Enter your Email"  required />
    </div>
    <div class="button-panel">
                <input type="button" onClick={this.submithandler} class="button" value="Register" />
    </div>
  </form>
  <div class="reminder">
    <p>Already have an Account <a href="/login">Login Now</a></p>
  </div>
  
</div>


</Fragment>

);

}

}
export default Registration;
