import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Superheroes from './pages/Superheroes.tsx';
import AddSuperhero from './pages/AddSuperhero.tsx';
import Header from './components/Header.tsx';
function App() {
  return (
    <>
      <Router basename='/ejam-test-front/'>
        <div className='App'>
          <Header />
          <div className='content'>
            <Routes>
              <Route path='' element={<Superheroes />} />
              <Route path='add' element={<AddSuperhero />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
