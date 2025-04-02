import NavigationBar from './components/Navigation/NavigationBar'
import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Spacer from './components/Spacer/Spacer';
import Features from './components/Features/Features';
import Joinsection from './components/Joinsection/Joinsection';
import Plans from './components/Plans/Plans';
import Trainsection from './components/Trainsection/Trainsection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <NavigationBar />
     <Hero />
     <About />
     <Spacer />
     <Features />
     <Joinsection />
     <Plans />
     <Trainsection />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
