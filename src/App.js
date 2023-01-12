import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Doctors from './components/Doctor/Doctor';
import Banner from './components/Banner/Banner';
import RegisterDoctor from './components/RegisterDoctor/RegisterDoctor';
import RegisterPatient from './components/RegisterPatient/RegisterPatient';
import SpecificDoctor from './components/Doctor/SpecificDoctor';
import Login from './components/Login/Login';
import OneDoctor from './components/Doctor/OneDoctor';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            
            <Route path='/' element={<Banner/>}/>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/doctors' element={<Doctors/>}/>
            <Route path='/registerDoctor' element={<RegisterDoctor/>}/>
            <Route path='/registerPatient' element={<RegisterPatient/>}/>
            <Route path='/onedoc/:docId'element={<SpecificDoctor></SpecificDoctor>}/>
            <Route path='/oneDoctor' element={<OneDoctor></OneDoctor>}/>
        </Routes>
    </div>
  );
}

export default App;
