import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <header className="home-header" style={{ background: 'linear-gradient(135deg, #764BA2 0%, #646CFF 100%)', color: '#FFFFFF' }}>
        <h1>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            data-probat-conversion="true"
            style={{ backgroundColor: '#FFFFFF', color: '#764BA2', fontWeight: 'bold' }}
          >
            Count is {count}
          </button>
          <p>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home