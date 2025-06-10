import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { BarDetalle } from './components/bar-detalle';
import { Nosotros } from './components/nosotros';
import { Bares } from './components/bares';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Bares />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/bar/:id" element={<BarDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
