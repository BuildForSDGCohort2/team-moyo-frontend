import React, { Component } from 'react'
// import logo from '../../assets/img/logo.png'; 
import facebook from '../../assets/img/facebook.png'; 
import '../../App.css';

export default class SignupForm extends Component {

  render() {
    return (
      <div className="">
        <h1>Sign up to Moyo</h1>
        <div className="social-media">
        <img className="" src={facebook} alt="google" />
        <img className="" src={facebook} alt="twitter" />
        <img className="" src={facebook} alt="github" />
        </div>
        <form>
           
            <div className="form-tabs">
                <label>FullName</label>
                <input className="form-input" type="text" placeholder="John Doe" />
            </div>
            <div className="">
                <label>Email</label>
                <input className="form-input" type="email" placeholder="john@gmail.com" />
            </div>
            <div className="">
                <label>Password</label>
                <input className="form-input" type="password" placeholder="**********" />
            </div>
            <div className="terms">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label  for="vehicle1"> By creating an account you accept the terms and conditions</label>
            </div>
            <input className="button" type="submit" value="Submit" />
        </form>
            </div>
       
    )
  }
}
