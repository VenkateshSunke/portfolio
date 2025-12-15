import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  const styles = {
    container: {
      backgroundColor: '#FFFFFF',
      color: '#242424',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      backgroundColor: '#764BA2',
      color: '#FFFFFF',
      border: '1px solid #764BA2',
      padding: '0.6em 1.2em',
      fontSize: '1em',
      fontWeight: 600,
      cursor: 'pointer',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(118, 75, 162, 0.2)'
    }
  }

  return (
    <div className="home" style={styles.container}>
      <header className="home-header" style={{ width: '100%', textAlign: 'center' }}>
        <h1 style={{ color: '#764BA2' }}>Welcome to My Portfolio</h1>
        <p style={{ color: '#555555' }}>This is a React.js application built with JSX files.</p>
        <div className="card" style={{ padding: '2em', backgroundColor: '#F9F9F9', borderRadius: '8px', margin: '1em 0' }}>
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
          <p style={{ color: '#555555' }}>
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