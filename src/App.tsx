import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import CustomRoutes from './components/routing/CustomRoutes';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route element={<CustomRoutes />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
