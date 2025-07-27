import logo from './logo.svg';
import './style/tailwind.css';
import Login from './components/login';
import LoggedIn from './components/loggedIn';
import { useEffect, useState } from 'react';


function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash.split('&')[0].split('access_token=')[1];
    let token =  window.localStorage.getItem("token");  
  
    if(!token && hash){
      token = hash;
      window.localStorage.setItem("token", token);
    }

    setToken(token);
    
  }, []);
  
 

  return (
    <div className="App	m-auto	h-screen bg-[url('https://images.unsplash.com/photo-1750247400011-1effe6b427a8?q=80')]">
        {!token ? <Login/> : <> <LoggedIn token={token} setToken={setToken} />  </>}
    </div>
  );
}

export default App;
