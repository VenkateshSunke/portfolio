import { useState } from 'react'
import '../../src/Home.css'

function Home({ probat }) {
  const [count, setCount] = useState(0)

  const themeStyles = {
    container: {
      backgroundColor: '#FFFFFF',
      color: '#242424',
      minHeight: '100vh'
    },
    headerText: {
      color: '#764BA2'
    },
    button: {
      backgroundColor: '#646CFF',
      color: '#FFFFFF',
      border: '1px solid #646CFF'
    }
  }

  return (
    <div className="home" style={themeStyles.container}>
      <header className="home-header">
        <h1 style={themeStyles.headerText}>Welcome to My Portfolio</h1>
        <p>This is a React.js application built with JSX files.</p>
        <div className="card">
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={themeStyles.button}
            data-probat-conversion="true"
          >
            Count is {count}
          </button>
          <p>
            Edit <code>src/Home.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the button to see the counter in action!
        </p>
      </header>
    </div>
  )
}

export default Home