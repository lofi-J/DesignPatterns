import "./App.css";
import React, {useState} from "react";
import Parent from "./components/Parent";


const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#000',
    color: '#fff',
  }
}

export const Context = React.createContext();

function App() {
  const data = { nickname: 'Lofi-J' };
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }

  const providerValue = {
    data,
    theme: themes[theme],
    toggleTheme
  }

  return (
    <div className={`App theme-${theme}`} style={themes[theme]}>
      <Context.Provider value={providerValue}>
        <Parent />
      </Context.Provider>
    </div>
  );
}

export default App;
