import './App.css';

function App() {
const [num1, setNum1] =useState(0);
const [num2, setNum2] =useState(0);
const [num3, setNum3] =useState(0);

const handleChangeNum1 = (event) => {
    setNum1(event.target.value)
}
const handleChangeNum2 = (event) => {
    setNum2(event.target.value)
}




  return (
    <div className="App">
      <header className="App-header">
        <h1>002</h1>
         
      </header>
    </div>
  );
}
 
export default App;