import Intro from "./components/Intro/intro";
import NavBar from "./components/NavBar/navbar";
import About from "./components/About/about";
import Projects from "./components/Projects/project";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/contact";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
