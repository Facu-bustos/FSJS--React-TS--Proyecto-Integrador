import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './components/navbar/Navbar'
import Hoteles from './components/Hoteles';
import Paquetes from './components/Paquetes';
import Categoria from './components/Categoria';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Init from './components/Init';



function App() {
  return (
     <>
<NavScrollExample />
      <BrowserRouter>
        <Routes>
          <Route path='Init' element={<Init />}></Route>
          <Route path='Paquetes' element={<Paquetes/>}></Route>
          <Route path='Hoteles' element={<Hoteles/>}></Route>
        </Routes>
     </BrowserRouter>
    </>     
    
  );
}

export default App;
