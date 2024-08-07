import React, { useEffect, useState } from 'react'
import Dashboard from './Page/Dashboard'
import './App.css'


const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  
  return (
    <>
    <div className={`content ${isVisible ? 'fade-in' : ''}`}>
      <Dashboard />
    </div>
    </>
  )
}

export default App

