import { useState } from 'react'
import '../../src/Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ backgroundColor: '#242424', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <header className="home-header" style={{ backgroundColor: '#764BA2', color: '#FFFFFF', padding: '3rem 2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', margin: '2rem', maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#FFFFFF' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '1rem', borderRadius: '4px' }}>
          <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: '#646CFF', color: '#FFFFFF', border: 'none', padding: '0.8em 1.5em', borderRadius: '8px', cursor: 'pointer', outline: 'none' }}>
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