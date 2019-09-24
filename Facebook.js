import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
//import { string } from 'prop-types';


class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      result: { username: '', password: '' }
    }
    this.responseFacebook = this.responseFacebook.bind(this);

    //this.responsehandler=this.responsehandler.bind(this);
  }
  responseFacebook = (response) => {
    if (response) {
      let load = {
        name: response.name,
        password: String(response.accessToken),
        email: response.id
      }
      axios({
        method: "post",
        url: "http://localhost:51937/api/values",
        data: load,
        success: function (res) {
          this.setState({
            result: {
              username: response.name,
              password: res.Token
            }
          });

        },
        error: function (e) {
          console.log('error', e);
        }
      })   

      let payload = {
        name: response.name,
        password: String(response.accessToken)
      }
      axios({
        method: 'post',
        url: 'http://localhost:51937/api/Token',
        data: payload,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          console.log(res)
          localStorage.setItem("username", JSON.stringify(this.result))
        }
      });
    }
    else {
      console.log("unable to fetch data")
    }

  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("username", JSON.stringify(nextState.result))

  }
  render() {


    return (<FacebookLogin
      appId="422443185136180"
      onFailure={this.responseFacebook}
      autoLoad={false}
      cookie={true}
      callback={this.responseFacebook}
      cssClass="form-wrapper1"
      icon="fa-facebook"
    />

    );

  }
}
export default Facebook;

