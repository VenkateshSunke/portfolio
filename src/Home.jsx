import React from "react";
import { useState } from 'react'
import './Home.css'
import { withExperiment } from "../probat/runtime";
import { PROBAT_COMPONENTS, PROBAT_REGISTRIES } from "../probat/index";

const __PROBAT_KEY__ = "src/Home.jsx";

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
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

export default (() => {
  const meta = PROBAT_COMPONENTS[__PROBAT_KEY__];
  const reg  = PROBAT_REGISTRIES[__PROBAT_KEY__] as Record<string, React.ComponentType<any>> | undefined;
  return (meta?.proposalId && reg)
    ? withExperiment<any>(Home as any, { proposalId: meta.proposalId, registry: reg })
    : Home;
})();
