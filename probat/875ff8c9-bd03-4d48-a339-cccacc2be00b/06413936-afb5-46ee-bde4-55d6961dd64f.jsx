import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#764BA2', color: '#FFFFFF', minHeight: '100vh' }}>
      <header className="home-header">
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button 
            onClick={() => setCount((count) => count + 1)}
            data-probat-conversion="true"
            style={{ backgroundColor: '#FFFFFF', color: '#764BA2', border: 'none', padding: '0.6em 1.2em', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Count is {count}
          </button>
          <p>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#E0E0E0' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home