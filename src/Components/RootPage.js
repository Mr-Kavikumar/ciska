import React from 'react'
import ContactUs from './ContactUs';
import Home from './Home';
import Members from './Members';
import NavBar from './NavBar';
import Register from './Register';
import Works from './Works';


function RootPage() {
  return (
    <div>
      <div>
        <NavBar />
        <main>
          <div id='home'>
            <Home/>
          </div>
          <div id='register'>
            <Register />
          </div>
          <div id='works'>
            <Works />
          </div>
          <div id='members'>
            <Members />
          </div>
          <div id='contactus'>
            <ContactUs />
          </div>
        </main>
      </div>
    </div>
  )
}

export default RootPage
