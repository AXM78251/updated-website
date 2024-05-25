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
        }, 10);
    
        return () => clearInterval(interval);
      }, [onComplete]);

    return (
        <div className = "load-con">
            <div className = "content">
                <div className = "load-bar" style ={{ width: `${progress}%` }}></div>
                <div className = "load-text">Loading...</div>
            </div>
        </div>
    );
};

export default LoadingBar
