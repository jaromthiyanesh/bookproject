import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faI } from '@fortawesome/free-solid-svg-icons';

export default function BookTitle() {
  return (
    <div className='container1'>
        <div className='navbar'>
            <h1>Book  <FontAwesomeIcon icon={faI} style={{ color: "#f9cd2f" }} />  Read</h1>
            <div className='bar'>
            <h2>Home</h2>
            <h2 className='h2'>Favourite</h2>
            <h2 className='h2'>Library</h2>
            <Link to={"login"}><button>Login</button></Link>
            <Link to={"signup"}><button>Signup</button></Link>
            </div>
        </div>
        
    </div>
  );
}
