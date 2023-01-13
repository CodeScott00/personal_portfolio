import logo from './logo.svg';
import './App.css';
import { NavBar } from '../src/components/NavBar';
import { Banner } from '../src/components/Banner';
import { Skills } from '../src/components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
