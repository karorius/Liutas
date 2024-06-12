import { useRef, useState, useEffect } from 'react';
import './App.css';
import './buttons.scss';
import './circle.scss'

function App() {
    const [squares, setSquares] = useState([]);
    const history = useRef([]);
    useEffect(() => {
        
        const savedSquares = JSON.parse(localStorage.getItem('squares') || '[]');
        setSquares(savedSquares);
      }, []);
    useEffect(() => {
      
        localStorage.setItem('squares', JSON.stringify(squares));
      }, [squares]);
  
    const addSquares = () => {
      const numberOfSquares = Math.floor(Math.random() * 6) + 5;
      history.current.push(squares);
      const newSquares = [...squares, ...Array(numberOfSquares).fill({})];
      setSquares(newSquares);
    };
  
    const clearSquares = () => {
        history.current.push(squares);
      setSquares([]);
    };
    const undoAction = () => {
        if (history.current.length > 0) {
          const previousState = history.current.pop();
          setSquares(previousState);
        }
      };
    return (
      <div className="App">
        <button type="button" className="green" onClick={addSquares}>Pridėti</button>
        <button type="button" className="red"onClick={clearSquares}>Išvalyti</button>
        <button type="button" className="yellow"onClick={undoAction}>Atgal</button>
        <div className="sq-bin">
          {squares.map((_, i) => (
            <div key={i} className="sq"></div>
          ))}
        </div>
      </div>
    );
  }
  

export default App;