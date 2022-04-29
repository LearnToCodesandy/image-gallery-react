import React from 'react';
import ContextContainer from './ContextContainer';
import Sidebar from './Sidebar';

const Wrapper = () => {
  return (
    <>
      <Sidebar />
      <ContextContainer />
    </>
  );
};

export default Wrapper;
