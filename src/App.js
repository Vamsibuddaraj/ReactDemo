import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="vamsi" college="gitam"><p> this is children property</p></Greet>
      <Greet name = "krishnam" college = "gitam"/>
    <Greet name ="raju"/>
    <Welcome/>
    </div>
  );
}

export default App;
