import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Login = lazy(() => import('./Login'));
const Daftar = lazy(() => import('./Daftar'));
const Notif = lazy(() => import('./Notif'));
const Kamar = lazy(() => import('./Kamar'));
const Pusat = lazy(() => import('./Pusat'));
const Syarat = lazy(() => import('./Syarat'));
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Daftar" element={<Daftar />} />
        <Route path="/Notif" element={<Notif />} />
        <Route path="/Kamar" element={<Kamar />} />
        <Route path="/Pusat" element={<Pusat />} />
        <Route path="/Syarat" element={<Syarat />} />

      </Routes>
    </Suspense>
  </Router>
);

export default App;
