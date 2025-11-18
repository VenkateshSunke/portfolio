import { useState } from 'react';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              backgroundColor: '#646CFF',
              color: '#242424', /* High contrast text on accent background */
              border: '1px solid #646CFF',
              padding: '8px 18px',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '1em'
            }}
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
  );
}

export default Home;