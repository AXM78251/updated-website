import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftNav from "./components/LeftNav"
import RightNav from "./components/RightNav"
import LoadingBar from './components/LoadingBar'

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading ? ( <LoadingBar onComplete={handleLoadingComplete} /> ) : 
          (<div className = "container">
          <LeftNav/>
          <RightNav/>
        </div>)
      }
    </div>
  )
}

export default App
