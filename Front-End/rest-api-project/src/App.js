import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Update from './Components/Update';
import NotFound from './Components/NotFound';
import './App.css';

function App() {
  return (
    <>
     <div className="crud">
    <span className="c">C</span>
    <span className="r">R</span>
    <span className="u">U</span>
    <span className="d">D</span>
    </div>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
