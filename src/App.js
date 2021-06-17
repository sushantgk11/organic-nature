import './App.css';
import About from './Components/About';
import Bgwrapper from './Components/Bgwrapper';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Product from './Components/Product';


function App() {
  
  function loadFunc(){
    var preload = document.getElementById("loading")
    preload.style.display = "none";
  }

  return (
    <div onLoad={loadFunc}>
    <div id="loading"></div>
    <Navbar/>
    <Home/>
    <About />
    <Product />
    <Bgwrapper />
    <Blog />
    <Footer />
    </div>
  );
}

export default App;
