import React from 'react';
import logo from './logo.svg';
import './App.css';
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ProbatProvider>
  );
}

export default App;