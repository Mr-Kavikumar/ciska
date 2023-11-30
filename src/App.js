import './App.css';
import Home from './Components/Home';
import Members from './Components/Members';
import NavBar from './Components/NavBar';
import Register from './Components/Register';

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
          <Members />
        </div>
      </main>
    </div>

  );
}

export default App;
