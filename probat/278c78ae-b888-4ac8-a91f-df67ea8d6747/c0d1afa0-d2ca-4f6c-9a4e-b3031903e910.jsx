import { useState } from 'react'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <header className="home-header" style={{ backgroundColor: 'rgba(118, 75, 162, 0.05)', padding: '20px', borderRadius: '8px', margin: '20px auto', maxWidth: '800px' }}>
        <h1 style={{ color: '#242424' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#242424' }}>This is a React.js application built with JSX files.</p>
        <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '8px', margin: '20px auto', maxWidth: '400px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div className="card">
            <button
              onClick={() => setCount((count) => count + 1)}
              style={{ backgroundColor: '#646CFF', color: '#242424', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '1em', fontWeight: 'bold' }}
            >
              Count is {count}
            </button>
            <p style={{ color: '#242424' }}>
              Edit <code>src/Home.jsx</code> and save to test HMR
            </p>
          </div>
        </div>
        <p className="read-the-docs" style={{ color: '#242424' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home