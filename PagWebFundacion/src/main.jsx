import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.scss';

import Index from './Views/Index.jsx';
<<<<<<< Updated upstream
=======
import Farmacia from './Views/Farmacia.jsx';
import Contactanos from './Views/Contactanos.jsx';

>>>>>>> Stashed changes

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />}/>
<<<<<<< Updated upstream
=======
      <Route path='/Quienes-Somos' element={<Index/>}/>
      <Route path='/Farmacia' element={<Farmacia/>}/>
      <Route path='/Contactanos' element={<Contactanos/>}/>
>>>>>>> Stashed changes
    </Routes>
  </BrowserRouter>
);
