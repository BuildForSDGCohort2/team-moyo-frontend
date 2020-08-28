import React, { Component } from 'react'
import logo from '../../assets/img/logo.png'; 
// import facebook from '../../assets/img/facebook.png'; 
import SignupForm from "../Signup/index";

import '../../App.css';
export default class LandingPage extends Component {

  render() {
    return (
      <div className="container">
        <div className="banner">
        <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="main">
            <div className="about">
                <h1 className="moyo-heading">Africa can Code</h1>
                <p className="moyo-text">Surprisingly, there is a very vocal faction of the design community that wants to see filler text banished to the original sources from whence it came. Perhaps not surprisingly, in an era of endless quibbling, there is an equally vocal contingent of designers leaping to defend the use of the time-honored tradition of greeking</p>

                <ul className="">
                    <li className="points">Surprisingly, there is a very vocal faction of the design community that wants to see filler text banished to the original sources from whence it came. Perhaps not surprisingly, in an era of endless quibbling, there is an equally vocal contingent of designers leaping to defend the use of the time-honored tradition of greeking</li>
                    <li className="points">Surprisingly, there is a very vocal faction of the design community that wants to see filler text banished to the original sources from whence it came. Perhaps not surprisingly, in an era of endless quibbling, there is an equally vocal contingent of designers leaping to defend the use of the time-honored tradition of greeking</li>
                    <li className="points">Surprisingly, there is a very vocal faction of the design community that wants to see filler text banished to the original sources from whence it came. Perhaps not surprisingly, in an era of endless quibbling, there is an equally vocal contingent of designers leaping to defend the use of the time-honored tradition of greeking</li>
                    <li className="points">Surprisingly, there is a very vocal faction of the design community that wants to see filler text banished to the original sources from whence it came. Perhaps not surprisingly, in an era of endless quibbling, there is an equally vocal contingent of designers leaping to defend the use of the time-honored tradition of greeking</li>
                </ul>

            </div>
            <div className="right-side">
                <SignupForm />
            </div>
        </div>

        
      </div>
    )
  }
}
