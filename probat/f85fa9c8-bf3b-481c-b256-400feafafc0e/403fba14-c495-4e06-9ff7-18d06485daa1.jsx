import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#242424', color: '#FFFFFF' }}>
      <header className="home-header" style={{ backgroundColor: '#242424' }}>
        <h1>Welcome to My Portfolio</h1>
        <p style={{ color: '#E0E0E0' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: '#333333', borderColor: '#444' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            data-probat-conversion="true"
            style={{ backgroundColor: '#646CFF', color: '#FFFFFF', border: '1px solid #646CFF' }}
          >
            Count is {count}
          </button>
          <p style={{ color: '#E0E0E0' }}>
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