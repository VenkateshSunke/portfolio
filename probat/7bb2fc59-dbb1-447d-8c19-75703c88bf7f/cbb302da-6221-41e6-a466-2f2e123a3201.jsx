import { useState } from 'react'
import '../../src/Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <header className="home-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h1 style={{ color: '#242424' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#242424' }}>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: '#646CFF', color: '#FFFFFF', border: 'none', padding: '0.8em 1.5em', borderRadius: '8px', cursor: 'pointer', outline: 'none' }}>
            Count is {count}
          </button>
          <p style={{ color: '#242424' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#242424' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home