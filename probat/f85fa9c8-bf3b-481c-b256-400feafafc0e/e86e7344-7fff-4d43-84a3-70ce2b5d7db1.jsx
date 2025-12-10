import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#FFFFFF', color: '#242424' }}>
      <header className="home-header" style={{ backgroundColor: '#FFFFFF', color: '#242424' }}>
        <h1 style={{ color: '#242424' }}>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: '#F9F9F9', border: '1px solid #E5E5E5' }}>
          <button 
            onClick={() => setCount((count) => count + 1)}
            data-probat-conversion="true"
            style={{ backgroundColor: '#FFFFFF', color: '#764BA2', border: '2px solid #764BA2', fontWeight: 'bold' }}
          >
            Count is {count}
          </button>
          <p>
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