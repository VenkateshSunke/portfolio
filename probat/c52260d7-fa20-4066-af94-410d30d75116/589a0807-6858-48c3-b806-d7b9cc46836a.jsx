import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#FFFFFF', color: '#242424', minHeight: '100vh' }}>
      <header className="home-header">
        <h1 style={{ color: '#764BA2' }}>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{ backgroundColor: '#FFFFFF', color: '#764BA2', border: '2px solid #764BA2', padding: '0.6em 1.2em', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
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

export default Home