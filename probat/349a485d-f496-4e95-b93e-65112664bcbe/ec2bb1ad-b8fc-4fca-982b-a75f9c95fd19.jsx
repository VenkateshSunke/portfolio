import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <header className="home-header" style={{ backgroundColor: '#FFFFFF', color: '#242424' }}>
        <h1 style={{ color: '#242424' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#242424' }}>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button 
            style={{ backgroundColor: '#764BA2', color: '#FFFFFF', border: 'none' }}
            onClick={(e) => {
              e.stopPropagation();
              if (probat?.trackClick) probat.trackClick();
              setCount((count) => count + 1)
            }}
            data-probat-conversion="true"
          >
            Count is {count}
          </button>
          <p style={{ color: '#242424' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#646CFF' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home