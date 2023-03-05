import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main">
      <Header/>
      <Home/>
      <Footer/>
     
    </div>
  );
}

export default App;
