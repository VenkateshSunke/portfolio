import React, { useState } from 'react'
import { withExperiment } from "@probat/react";
import './Home.css'

const __PROBAT_COMPONENT_PATH__ = "src/Home.jsx";

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button
            onClick={(e) => {
              e.stopPropagation(); // CRITICAL: Prevents wrapper from also tracking
              if (probat?.trackClick) {
                probat.trackClick();
              }
              setCount((count) => count + 1);
            }}
            data-probat-conversion="true"
          >
            Count is {count}
          </button>
          <p>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default withExperiment(Home, {
    componentPath: __PROBAT_COMPONENT_PATH__
});
