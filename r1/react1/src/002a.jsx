import './App.css';
import './circle.scss';
function App() {
    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>LIST</h1>
             <ul>
                {

dogs
.sort((a, b) => a.length - b.length)
.map((d, i) => i % 2
    ?
    <li style={{ backgroundColor: 'skyblue', width: "110px" ,height: '50px' }} key={i}>{d}</li>
    :
    <li className='circle' key={i}>{d}</li>
)


                }


             </ul>
      </header>
    </div>
  );
}
 
export default App;