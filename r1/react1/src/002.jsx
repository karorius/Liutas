import './App.css';
import Namai from './Components/002/Namai'
function App() {

 const text2 ='labas vilke';
 const text = 'labas zuikeli';
  return (
    <div className="App">
      <header className="App-header">
        <h1>002</h1>
             <div><span>Tekstas :</span><b>{text}</b></div>
        <Namai manoTekstas={text} color='pink' show={'big'}/>
        <Namai manoTekstas={text2} color='pink' show={'small'}/>
      </header>
    </div>
  );
}
 
export default App;