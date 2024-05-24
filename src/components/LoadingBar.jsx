import React, {useEffect, useState} from 'react'
import "./LoadingBar.css"

const LoadingBar = ({onComplete}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setProgress(prev => {
            if (prev >= 100) {
              clearInterval(interval);
              onComplete();
              return 100;
            }
            return prev + 1;
          });
        }, 30);
    
        return () => clearInterval(interval);
      }, [onComplete]);

    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="loading-bar" style={{ width: `${progress}%` }}></div>
                <div className="loading-text">Loading...</div>
            </div>
        </div>
    );
};

export default LoadingBar
