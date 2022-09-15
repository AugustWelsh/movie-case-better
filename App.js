import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Booking from './pages/Booking'
import Start from './pages/Start'
import Movies from './pages/Movies'


function App() {

  return (
    <div>
        <BrowserRouter>
        

        <nav className='navi'>
        <h1>Beeyond Movies</h1>
        <Link to="/">Start</Link>
        <Link to="bokning">Boka Film</Link>
        <Link to="movies">Filmer</Link>
        </nav>

          <Routes>

            <Route path="/" element={<Start />} />
            <Route path="bokning" element={<Booking />} />
            <Route path="movies" element={<Movies/>} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;