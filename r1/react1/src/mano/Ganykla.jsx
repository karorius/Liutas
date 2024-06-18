import { useState } from 'react';
import './App.css';
import './ganykla.scss';
import './buttons.scss';




const animalTypes = ['Avys', 'Karves'];



function App() {
    const [animals, setAnimals] = useState([]);
    const ikelt = animal => {
        setAnimals(a => [...a, animal])
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <div className="animals-bin">
                    {
                        animalTypes.map(animalType =>
                            <div className="animal-bin">
                                <div className="top">
                                    {
                                       animals.map((a, i)=> a === animalType ? <div key = {i}  className='animal'>🐱‍🐉</div> : null)
                                    }
                                </div>
                                <div className="bottom">
                                    <div className="buttons">
                                        <button type='button' className='green' onClick={_ => ikelt(animalType)}>{animalType}</button>
                                    </div>
                                </div>
                            </div>
                        )

                    }


                </div>

            </header>

        </div>
    );
}

export default App;             