import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  const styles = {
    container: {
      backgroundColor: '#764BA2',
      color: '#FFFFFF',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      backgroundColor: '#646CFF',
      color: '#FFFFFF',
      border: '1px solid rgba(255,255,255,0.3)',
      padding: '0.6em 1.2em',
      fontSize: '1em',
      fontWeight: 500,
      cursor: 'pointer',
      borderRadius: '8px'
    }
  }

  return (
    <div className="home" style={styles.container}>
      <header className="home-header" style={{ width: '100%', textAlign: 'center' }}>
        <h1 style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#E0E0E0' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ padding: '2em' }}>
          <button 
            style={styles.button}
            data-probat-conversion="true"
            onClick={(e) => {
              e.stopPropagation();
              if (probat && probat.trackClick) probat.trackClick();
              setCount((count) => count + 1)
            }}
          >
            Count is {count}
          </button>
          <p style={{ color: '#E0E0E0' }}>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs" style={{ color: '#E0E0E0', opacity: 0.8 }}>
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home