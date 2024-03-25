import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let token =  window.localStorage.getItem("token");  
  
    if(!token && params.get('code')){
      token = params.get('code');
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    
  }, []);
  
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }

  return (
    <div className="App">
      <header className="App-header">
        {!token ? <Login/> : <button onClick={logout}>Log out</button>}
          
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
  );
}

export default App;
