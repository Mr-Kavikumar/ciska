import './App.css';
import HomeExtended from './Components/HomeExtended';
import RootPage from './Components/RootPage';
import Home from './Components/Home';
import Members from './Components/Members';
import Register from './Components/Register';
import Works from './Components/Works';
import ContactUs from './Components/ContactUs';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import RegisterExtended from './Components/RegisterExtended';
import Payment from './Components/Payment';
import AllMembers from './Components/AllMembers';


function App() {
  return (  
      <BrowserRouter>
          <Routes>
          <Route index element={<RootPage/>}/>
            <Route path='/HomeExtended' element={<HomeExtended/>}/>
            <Route path='/' element={<RootPage/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Members' element={<Members/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Works' element={<Works/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/RegisterExtended' element={<RegisterExtended/>}/>
            <Route path='/RegisterExtended/Payment' element={<Payment/>}/>
            <Route path='/AllMembers' element={<AllMembers/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
