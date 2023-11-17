import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faI } from '@fortawesome/free-solid-svg-icons';

export default function Signup() {
  return (
    <div className='container'>
    <div className='box'>
      <h1 className='title1'>Book <FontAwesomeIcon icon={faI} style={{ color: "#f9cd2f" }} /> Read</h1>
      <div className='content1'>
        <h1 className='topic'>Signup</h1>
        <div className='main1'>
        <div className='id'>
        <h2>First Name</h2>
        <input type='text' placeholder='First Name' />
        <h2>Last Name</h2>
        <input type='text' placeholder='Last Name' />
        <h2>Phone Number</h2>
        <input type='number' placeholder='Phone Number' />
        </div>
        <div className='id'>        
        <h2>Email Address</h2>
        <input type='email' placeholder='Email' />
        <h2>Confirm Password</h2>
        <input type='password' placeholder='Confirm Password' />
        <h2>Password</h2>
        <input type='password' placeholder='Password' />
        </div>
        <button className='signupbtn'>Signup</button>
        </div>
      </div>
    </div>
  </div>
  )
}
