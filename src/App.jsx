import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Impact from './components/Impact';
import Founder from './components/Founder';
import Donate from './components/Donate';
import Social from './components/Social';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Mission />
        <Problem />
        <Solution />
        <Impact />
        <Founder />
        <Donate />
        <Social />
      </main>
      <Footer />
    </>
  );
}

export default App;
