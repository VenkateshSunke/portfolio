import { useState } from 'react';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              backgroundColor: '#764BA2',
              color: '#FFFFFF',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
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