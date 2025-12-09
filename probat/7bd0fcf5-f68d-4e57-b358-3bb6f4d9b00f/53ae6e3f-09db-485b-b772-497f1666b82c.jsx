import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#FFFFFF', color: '#242424', minHeight: '100vh' }}>
      <header className="home-header">
        <h1 style={{ color: '#764BA2' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#444444' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', border: '1px solid #E0E0E0' }}>
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
          <p style={{ color: '#444444' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#666666' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home