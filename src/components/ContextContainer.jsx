import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Favorites from './Favorites';
import Navbar from './Navbar';
import Settings from './Settings';
import Upload from './Upload';
import ImageSpace from './ImageSpace';

const ContextContainer = () => {
  return (
    <div className="content__container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/images/:id" element={<ImageSpace />} />
      </Routes>
    </div>
  );
};

export default ContextContainer;
