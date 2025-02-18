import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.scss';

import Index from './Views/Index.jsx';
import QuienesSomos from './Views/QuienesSomos.jsx';
import Farmacia from './Views/Farmacia.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />}/>
      <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
      <Route path='/Farmacia' element={<Farmacia/>}/>
    </Routes>
  </BrowserRouter>
);