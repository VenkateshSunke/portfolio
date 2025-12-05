import Home from './Home'
import { ProbatProvider } from "@probat/react";

function App() {
  return (
    <ProbatProvider 
      apiBaseUrl="https://gushi.onrender.com"
      clientKey="" 
      environment="prod"
      repoFullName="VenkateshSunke/portfolio"
    >
      <div className="App">
        <Home />
      </div>
    </ProbatProvider>
  )
}

export default App