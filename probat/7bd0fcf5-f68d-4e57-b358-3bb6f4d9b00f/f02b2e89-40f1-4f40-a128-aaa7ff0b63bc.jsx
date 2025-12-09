import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#764BA2', color: '#FFFFFF', minHeight: '100vh' }}>
      <header className="home-header">
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#E0E0E0' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '8px' }}>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              if (probat && probat.trackClick) { probat.trackClick() }
              setCount((count) => count + 1)
            }}
            data-probat-conversion="true"
            style={{ backgroundColor: '#646CFF', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
          >
            Count is {count}
          </button>
          <p style={{ color: '#E0E0E0' }}>
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