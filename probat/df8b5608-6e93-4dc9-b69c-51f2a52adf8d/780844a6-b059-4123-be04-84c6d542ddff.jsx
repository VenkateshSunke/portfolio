import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#242424', color: '#F5F5F5', minHeight: '100vh' }}>
      <header className="home-header">
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#CCCCCC' }}>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{ backgroundColor: '#646CFF', color: '#FFFFFF', border: 'none' }}
            data-probat-conversion="true"
          >
            Count is {count}
          </button>
          <p style={{ color: '#CCCCCC' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#CCCCCC' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home