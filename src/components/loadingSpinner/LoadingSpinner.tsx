import React, { useEffect, useState } from 'react';
import './LoadingSpinner.scss'

function LoadingSpinner() {
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [])

  return (
    <div id="loading">
        {isLoading ?
            <div className="loading-panel">
                <div className="loader">
                </div>
            </div>
        : null }
    </div>
  )
}

export default LoadingSpinner;