import { ProbatProvider } from "@probat/react";
import Home from './Home'

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