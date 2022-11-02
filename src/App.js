import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { Home } from './pages/home';
import { Dashboard } from './pages/dashboard';
import { DashboardUPT } from './pages/dashboardUPT';
import { TambahTanah } from './pages/tambahTanah';
import { DetailTanah } from './pages/detailTanah';
import { Page7 } from './pages/informasiTanahBagian';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/dashboard/:id' element={<DashboardUPT />} />
        <Route path="/dashboard/tambah" element={<TambahTanah />} />
        <Route path="/dashboard/upt/detail" element={<DetailTanah />} />
        <Route path="/dashboard/upt/detail/tanah-bagian" element={<Page7 />} />
        <Route path="*" element={
        <div className='text-center'>
          <h3>404 Not Found</h3>
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
