import { useState } from 'react'
import '../../src/Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#242424', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <header className="home-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#FFFFFF' }}>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: '#764BA2', color: '#FFFFFF', border: 'none', padding: '0.8em 1.5em', borderRadius: '8px', cursor: 'pointer', outline: 'none' }}>
            Count is {count}
          </button>
          <p style={{ color: '#FFFFFF' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#FFFFFF' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home