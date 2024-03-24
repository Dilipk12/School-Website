import React from 'react'
import { useState } from 'react';

function Com() {
    const handleClick = (e) => {
        console.log('Event Type:', e.type);
        console.log('Target Element:', e.target);
      };
    
      return (
        <>
        <button onClick={handleClick}>
          Click me
        </button>
        <button onClick={()=>{console.log("hellodkfjdsl")}}>
          Click me
        </button>
       
       
        </>
      );
}

export default Com