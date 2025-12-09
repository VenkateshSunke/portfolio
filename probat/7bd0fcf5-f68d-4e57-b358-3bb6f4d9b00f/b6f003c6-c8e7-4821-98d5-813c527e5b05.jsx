import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#242424', color: '#FFFFFF', minHeight: '100vh' }}>
      <header className="home-header">
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#CCCCCC' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: '#333333', padding: '20px', borderRadius: '8px' }}>
          <button 
            onClick={(e) => {
              e.stopPropagation()
              if (probat && probat.trackClick) { probat.trackClick() }
              setCount((count) => count + 1)
            }}
            data-probat-conversion="true"
            style={{ backgroundColor: '#764BA2', color: '#FFFFFF' }}
          >
            Count is {count}
          </button>
          <p>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#AAAAAA' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home