import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#242424' }}>
      <header className="home-header" style={{ backgroundColor: '#242424', color: '#FFFFFF' }}>
        <h1>Welcome to My Portfolio</h1>
        <p style={{ color: '#E0E0E0' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: '#2A2A2A', border: '1px solid #444' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            data-probat-conversion="true"
            style={{ backgroundColor: '#764BA2', color: '#FFFFFF' }}
          >
            Count is {count}
          </button>
          <p style={{ color: '#CCCCCC' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#888888' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home