import logo from './logo.svg';
import './App.css';
import Navbar from './components/sections/Navbar';
import Presentation from './components/sections/Presentation'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
