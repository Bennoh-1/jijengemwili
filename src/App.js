import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Newschedule from './components/Newschedule';
import Newactivities from './components/Newactivities';
import Activities from './components/Activities';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/activities' element={<Activities />}></Route>
          <Route exact path='/newschedule' element={<Newschedule />}></Route>
          <Route exact path='/newactivities' element={<Newactivities />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;