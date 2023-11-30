import './App.css';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Members from './Components/Members';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import Works from './Components/Works';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <div id='home'>
          <Home />
        </div>
        <div id='register'>
          <Register />
        </div>
        <div id='members'>
          <Members/>
        </div>
        <div id='works'>
          <Works/>
        </div>
        <div id='contactus'>
          <ContactUs/>
        </div>
      </main>
    </div>

  );
}

export default App;
