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
import Gallery1 from './Components/AllGallery/Gallery1';
import Gallery2 from './Components/AllGallery/Gallery2';
import AllMembersExtended from './Components/AllMembersExtended';


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
            <Route path='/Gallery1' element={<Gallery1/>}/>
            <Route path='/Gallery2' element={<Gallery2/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/RegisterExtended' element={<RegisterExtended/>}/>
            <Route path='/RegisterExtended/Payment' element={<Payment/>}/>
            <Route path='/AllMembers' element={<AllMembers/>}/>
            <Route path='/AllMembersExtended' element={<AllMembersExtended/>}/>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
