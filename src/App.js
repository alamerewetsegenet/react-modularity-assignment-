import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {ContentA} from './components/ContentA.js';
import {ContentB} from './components/ContentB.js';




function App() {
  return (
    <div className="App">
      <Header></Header>
      <ContentA></ContentA>
      <ContentB></ContentB>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
