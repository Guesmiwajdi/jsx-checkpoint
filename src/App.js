import logo from './logo21.jpg'
import './App.css';
import ReactPlayer from 'react-player'
function App() {
  return (
    <div className="App">
     <div style={{maxWidth:"100vw"}}>

<h1 className="title red">checkpoint-jsx</h1>
<br/ >
<img src="/logo22.jpg" alt=" logo22" />
<br/ >
<img src={logo} alt ="logo21"/>
</div>
<ReactPlayer url="https://www.youtube.com/watch?v=9GtB5G2xGTY"/>
    </div>
  );
}

export default App;
