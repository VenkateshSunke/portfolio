import { useState } from 'react'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <header className="home-header" style={{ backgroundColor: '#FFFFFF', padding: '40px 20px', borderRadius: '8px 8px 0 0', marginBottom: '1px', margin: '20px auto 0', maxWidth: '800px' }}>
        <h1 style={{ color: '#242424' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#242424' }}>This is a React.js application built with JSX files.</p>
      </header>
      <div
        className="home-interactive-section"
        style={{
          backgroundColor: '#764BA2',
          color: '#242424',
          padding: '40px 20px',
          borderRadius: '0 0 8px 8px',
          textAlign: 'center',
          margin: '0 auto 20px',
          maxWidth: '800px'
        }}
      >
        <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '20px', borderRadius: '8px', margin: '20px auto', maxWidth: '400px' }}>
          <button
            onClick={() => setCount((count) => count + 1)}
            style={{ backgroundColor: '#646CFF', color: '#242424', border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold' }}
          >
            Count is {count}
          </button>
          <p style={{ color: '#242424' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#242424' }}>
          Click on the button to see the counter in action!
        </p>
      </div>
    </div>
  )
}

export default Home