import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
    <NavBar/>
    <main>
      <div  id='home'>
        <Home/>
      </div>
    </main>
    </div>

  );
}

export default App;
