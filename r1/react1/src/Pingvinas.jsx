import { useState } from 'react';
import './Styles/my.scss';
import './buttons.scss';

function App() {

  const [animate, setAnimate] = useState(false);

  const handleButtonClick = () => {
    setAnimate(true);

    setTimeout(()=> setAnimate(false), 5000); 
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <div className={`container ${animate ? 'box1' : ''}`}>
          
          <button type="button" className="blue" onClick={handleButtonClick}>Go</button>
          <h1>Gal pasokim</h1>
        </div>
        <div className="container box2"></div>
      </header>
    </div>
  );
}

export default App;
