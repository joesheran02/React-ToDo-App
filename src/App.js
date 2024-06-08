import logo from './logo.svg';
import './App.css';
import ViewAllList from './Components/ViewAllList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddList from './Components/AddList';
import SearchList from './Components/SearchList';
import DeleteList from './Components/DeleteList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddList/>}/>
      <Route path='/Search' element={<SearchList/>}/>
      <Route path='/Delete' element={<DeleteList/>}/>
      <Route path='/View' element={<ViewAllList/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
