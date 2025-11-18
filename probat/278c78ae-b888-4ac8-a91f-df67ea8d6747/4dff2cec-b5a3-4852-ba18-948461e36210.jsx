import { useState } from 'react'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="home">
      <header className="home-header" style={{ backgroundColor: '#242424', color: '#FFFFFF', padding: '40px 20px', borderRadius: '8px', margin: '20px auto', maxWidth: '800px' }}>
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#FFFFFF' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '8px', margin: '20px auto', maxWidth: '400px' }}>
          <button
            onClick={() => setCount((count) => count + 1)}
            style={{ backgroundColor: '#646CFF', color: '#242424', border: 'none', padding: '12px 25px', borderRadius: '6px', cursor: 'pointer', fontSize: '1.1em', fontWeight: 'bold' }}
          >
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