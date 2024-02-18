import { Routes,Route } from 'react-router';
import './App.css';
import { NavBar } from './components/NavBar';
import { Report } from './pages/Report';
import { Items } from './pages/Items';
import { Sales } from './pages/Sales';
import { AddItem } from './components/AddItems';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Report/>}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/items/add' element={<AddItem/>}/>
        <Route path='/items/edit/:id' element={<AddItem/>}/>
      </Routes>
    </div>
  );
}

export default App;
