import { useRef, useState } from 'react';
import './App.css';
import './buttons.scss';
import randomColor from './Functions/randColor';

function App() {



    const [m, setM] = useState([]);
    const [p, setP] = useState([]);
    const [sb, SetSb] = useState([])

    const id = useRef(1);

    const addM = _ => {
        setM(a => [...a, {
            id: id.current++,
            color: randomColor()
        }]);
    }

    const addP = _ => {
        setP(b => [...b, {
            id: id.current++,
            color: randomColor()
        }]);
    }
    const addSb = _ => {
        SetSb(c => [...c, {
            id: id.current++,
            color: randomColor()
        }]);
    }



    return (
        <div className="App">
            <header className="App-header">
                <h1>Sodiname medzius</h1>
                <div className='medziai'>
                <div className="sq-bin">

                    {
                        m.map(s =>
                            <div key={s.id} className="sq" style={{
                                backgroundColor: s.color + '66',
                                borderColor: s.color
                            }}>
                                {s.id}
                            </div>)

                    }

                </div>
                <div className="sq-bin">
                    {
                        p.map(sp =>
                            <div key={sp.id} className="sq" style={{
                                backgroundColor: sp.color + '66',
                                borderColor: sp.color
                            }}>
                                {sp.id}
                            </div>)

                    }
                </div>
                <div className="sq-bin">

                    {
                        sb.map(c =>
                            <div key={c.id} className="sq" style={{
                                backgroundColor: c.color + '66',
                                borderColor: c.color
                            }}>
                                {c.id}
                            </div>)

                    }
                 </div>  
                 </div>
                    <div className="buttons">

                        <button type="button" className="green" onClick={addM}> Prideti azuola </button>
                        <button type="button" className="red" onClick={addP}>Prideti pusi </button>
                        <button type="button" className="white" onClick={addSb}> Prideti berza </button>
                    </div>
            </header>
        </div>
    );
}

export default App;