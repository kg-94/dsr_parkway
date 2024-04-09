import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App body">
        <h1>DSR Parkway Residents</h1>
        <div id="page-body">
          Welcome Residents!!!
          <Routes>
            <Route path="/" element={<HomePage />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
