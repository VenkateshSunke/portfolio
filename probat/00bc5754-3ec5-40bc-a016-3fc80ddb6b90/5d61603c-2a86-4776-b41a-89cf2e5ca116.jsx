import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }: { probat?: { trackClick: () => void } }) {
  const [count, setCount] = useState(0)

  return (
    <div className="home" style={{ background: 'linear-gradient(135deg, #764BA2 0%, #646CFF 100%)', color: '#FFFFFF', minHeight: '100vh' }}>
      <header className="home-header">
        <h1 style={{ color: '#FFFFFF', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#F0F0F0' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '2rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }}>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setCount((count) => count + 1);
              probat?.trackClick?.();
            }}
            data-probat-conversion="true"
            style={{ backgroundColor: '#FFFFFF', color: '#764BA2', border: 'none', padding: '0.6em 1.2em', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Count is {count}
          </button>
          <p>
            Edit <code style={{ color: '#FFFFFF', backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.2em 0.4em', borderRadius: '4px' }}>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#E0E0E0' }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home