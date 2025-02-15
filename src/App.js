import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import List from './Components/student/List';
import AddNew from './Components/student/AddNew';
import View from './Components/student/View';
import Edit from './Components/student/Edit';

// import ApiData from './Components/ApiData';

function App() {
  return (
    <div className="App">
      {/* <h3>React js CRUD Project</h3> */}
      <BrowserRouter>
        <div className='nav-container'>
          <div className='nav-content'>
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/add-list">Add NewList</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/list">List</Link>
          </div>
        </div>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/add-list' element={<AddNew/>}></Route>
          <Route path='/view/:id' element={<View/>}></Route>
          <Route path='/list' element={<List/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
