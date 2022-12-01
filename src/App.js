import './styles.css';
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  
  return (
    <div className='bg-[#ecf0f3] text-[#2f3742] dark:bg-[#1f2937] dark:text-[#98b2d3]'>
      <Router>
        <Header className='bg-[#ecf0f3] text-[#2f3742] dark:bg-[#1f2937] dark:text-[#98b2d3]'/>
        <AnimatedRoutes />
      </Router> 
    </div>
  );
}

export default App;
