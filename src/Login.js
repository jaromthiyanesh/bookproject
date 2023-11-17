import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faI } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  return (
    <div className='container'>
      <div className='box'>
        <h1 className='title'>Book <FontAwesomeIcon icon={faI} style={{ color: "#f9cd2f" }} /> Read</h1>
        <div className='content'>
          <h1 className='topic'>Login</h1>
          <div className='main'>
          <h2>Email Address</h2>
          <input type='email' placeholder='Email' />
          <h2>Password</h2>
          <input type='password' placeholder='Password' />
          </div>
          <button className='loginbtn'>Login</button>
        </div>
      </div>
    </div>
  );
}

