import { useState, useEffect } from 'react';
import './buttons.scss';

import './App.css';

function App() {
    
    const [route, setRoute] = useEffect
        const [name, setName] = useState('');
        const [weight, setWeight] = useState('');
        const [cats, setCats] = useState([]);
        const [editIndex, setEditIndex] = useState(null);
        const [editWeight, setEditWeight] = useState('');
       
        useEffect(_ => {
            const storedCats = JSON.parse(localStorage.getItem('cats'));
            if (storedCats) {
                setCats(storedCats);
            }
        }, []);

        useEffect(_ => {
            localStorage.setItem('cats', JSON.stringify(cats));
        }, [cats]);
    
       
        const addCat = _ => {
            if (name && weight) {
                const newCat = { name, weight: parseFloat(weight) };
                const updatedCats = [...cats, newCat].sort((a, b) => b.weight - a.weight);
                setCats(updatedCats);
                setName('');
                setWeight('');
            }
        };
        const deleteCat = (index) => {
            const updatedCats = cats.filter((_, i) => i !== index);
            setCats(updatedCats);
        };
        const editCat = (index) => {
            setEditIndex(index);
            setEditWeight(cats[index].weight);
        };
    
       
        const updateCatWeight = _ => {
            if (editIndex !== null && editWeight) {
                const updatedCats = cats.map((cat, index) => {
                    if (index === editIndex) {
                        return { ...cat, weight: parseFloat(editWeight) };
                    }
                    return cat;
                }).sort((a, b) => b.weight - a.weight);
                setCats(updatedCats);
                setEditIndex(null);
                setEditWeight('');
            }
        };
        const totalWeight = cats.reduce((total, cat) => total + cat.weight, 0);

    return (
        <div className="App">
            <header className="App-header">

                <h1>Katinukų Sąrašas</h1>

                <div className='cat'>
                    <input style={{backgroundColor:'yellow', textAlign:'center'}}
                        type="text"
                        placeholder="vardas"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input style={{backgroundColor:'yellowgreen', textAlign:'center'}}
                        type="number"
                        placeholder="svoris"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <button type="button" className="green" onClick={addCat}>Pridėti Katinuką</button>
                </div>
                <h2 >Visi Katinukai</h2>
                <ul>
                    {cats.map((cat, index) => (
                        <li key={index}>
                            {cat.name} - {cat.weight} kg
                            <button type="button" className="red" onClick={() => deleteCat(index)}>Ištrinti</button>
                            <button type="button" className="yellow" onClick={() => editCat(index)}>Redaguoti</button>
                        </li>
                    ))}
                </ul>
                {editIndex !== null && (
                <div>
                    <h3>Redaguoti Katinuko Svorį</h3>
                    <input
                        type="number"
                        placeholder="Naujas svoris"
                        value={editWeight}
                        onChange={(e) => setEditWeight(e.target.value)}
                    />
                    <button type="button" className="green" onClick={updateCatWeight}>Atnaujinti</button>
                </div>
            )}
                <h3 style= {{color:'green'}}>Bendras svoris: {totalWeight} kg</h3>










            </header>
        </div>
    );
}

export default App;