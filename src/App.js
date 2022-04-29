import React from 'react';
import './style.css';
import Wrapper from './components/Wrapper';

export default function App() {
  const userLogin = true;
  return <div className="container">{userLogin ? <Wrapper /> : ''}</div>;
}
