import { useEffect, useState } from 'react'
import './App.css'
import LeftNav from "./components/LeftNav"
import RightNav from "./components/RightNav"
import LoadingBar from './components/LoadingBar'

function App() {
  const [loading, setLoading] = useState(true);

  const [cursorPos, setCursorPos] = useState({ x : 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPos({ x: event.pageX, y: event.pageY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? ( <LoadingBar onComplete={handleLoadingComplete} /> ) : 
          (<div className = "main-container">
          <LeftNav/>
          <RightNav/>
        </div>)
      }
    </>
  )
}

export default App
