import './App.css';
import { useState, createContext } from "react";
import Widget from './components/Widget';

export const Context = createContext();

function App() {

  const [user, setUser] = useState("User");
  

  return (
    <div className="App">
      <Context.Provider value={{user, setUser}}>
        <Widget />
      </Context.Provider>
    </div>
  );
}

export default App;