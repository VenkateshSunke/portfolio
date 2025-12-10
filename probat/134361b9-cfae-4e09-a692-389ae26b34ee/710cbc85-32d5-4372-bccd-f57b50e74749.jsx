import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#764BA2', color: '#FFFFFF', minHeight: '100vh' }}>
      <header className="home-header">
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#E6E6FA' }}>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{ backgroundColor: '#FFFFFF', color: '#764BA2', border: '1px solid #FFFFFF', fontWeight: 'bold' }}
            data-probat-conversion="true"
          >
            Count is {count}
          </button>
          <p style={{ color: '#E6E6FA' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#D8BFD8' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home