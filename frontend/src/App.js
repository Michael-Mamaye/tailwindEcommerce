import Home from './components/pages/Home'
import './App.css';
import Nav from './components/navigation/Nav';
import SideBar from './components/sidebar/SideBar';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Home/>
        <SideBar/>
    </div>
  );
}

export default App;
