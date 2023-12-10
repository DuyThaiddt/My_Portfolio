import Header from './components/nav/HeaderContent';
import Greeting from './components/greetings/GreetingContent';
import About from './components/about/AboutContent';
import Project from './components/projects/ProjectContent';
import Contact from './components/contact/ContactContent';
import './App.css';

function App() {
  
  return (
    <>
      <div className='header'><Header /></div>
      <div className='section greeting'><Greeting /></div>

      <div className='section about'>
        <div>This is the About</div>
        <About />
      </div>

      <div className='section projects'>
        <div>This is a Projects</div>
        <Project />
      </div>

      <div className='section contact'>
        <div>This is a Contact</div>
        <Contact />
      </div>


    </>
  );
}

export default App;
