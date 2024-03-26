import { Header, Footer, Main } from './components';
import './App.css';
import { useState } from 'react';

function App() {
  var [isDark, setIsDark] = useState(false)

  function toggleDarkMode(){
    setIsDark(prevDark => !prevDark)

}
  return (
    <div className={`App ${isDark ? "dark" : ""}`}>
      <Header isDark={isDark}/>
      <Main  isDark={isDark} toggleDarkMode={toggleDarkMode}/>
      <Footer isDark={isDark}/>
    </div>
  );
}

export default App;
