import React, { Component } from 'react'
import '../styling/loginPage.css';

export class LoginPage extends Component {
  render() {
    return (
      <div className='page-container'>
        <div className='form-container'>
          <div className='image-container'>
            <img src='client/src/images/owj1.png' alt='sneakers' className='sneakers' />
          </div>
          <div className='input-container'>
            <h1 className='form-header'>LOG IN</h1>
            <form>
              <label className='form-label'>Email Address</label>
              <input className='form-input' type='email' value='demosneakerhead@gmail.com'></input>
              <div className='form-errors' />
              <label className='form-label'>Password</label>
              <input className='form-input' type='password' value='sneakerhead'></input>
            </form>
            <div className='form-link'>
              <a href="./signup">CREATE ACCOUNT</a>
            </div>
            <button className='demo'>
              <a href='./home'>DEMO USER</a>
            </button>
            <button className='login-button'>
              <a href='./shop'>LOG IN</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage