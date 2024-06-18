import './App.css';
import './buttons.scss';
import { useState, useRef, useEffect } from 'react';
function App() {
const cbc = <svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">< ><path d="m22 11a1 1 0 0 0 -1 1v6a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3-3v-12a3 3 0 0 1 3-3h8a1 1 0 0 0 0-2h-8a5 5 0 0 0 -5 5v12a5 5 0 0 0 5 5h12a5 5 0 0 0 5-5v-6a1 1 0 0 0 -1-1z"/><path d="m8.7 8.5a1 1 0 1 0 -1.4 1.42l3.86 3.79a1 1 0 0 0 1.4 0l8.14-8a1 1 0 0 0 -1.4-1.42l-7.44 7.31z"/></></svg>
    
const text2 = useRef();

    const [text1, setText1] = useState('');
    const [error, setError] = useState(false);
    const [h1, setH1] = useState('CONTROLLED INPUTS');
    const [text3, setText3] = useState('');
    const [texts, setTexts] = useState({textA: '', textB: '', textC: ''});
    const [color, setColor] = useState('#282c34');
    const [range, setRange] = useState(30);
    const [select, setSelect] = useState(3);
const [cb,setCb] =useState({
    
})
    const animals = [
        {id: 1, name: 'bebras'},
        {id: 2, name: 'lape'},
        {id: 3, name: 'vilkas'},
        {id: 4, name: 'zuikis'},
        {id: 5, name: 'barsukas'}
    ];

    useEffect(_ => {
        text2.current.focus();
    }, []);


    const handleText1 = e => {
        if (e.target.value.length > 5) {
            setError(true);
            return;
        } else {
            setError(false);
        }
        setText1(e.target.value);
    }

    const handleH1 = e => {
        setText3(e.target.value);
    }

    // niekam tikęs būdas skaiyti inputus
    const readRed = _ => {
        // const el = document.querySelector('#text2'); niekada!
        // el yra text2.current
        console.log('text2:', text2.current.value);
    }

    const handleTexts = e => {
        setTexts(t => ({ ...t, [e.target.name]: e.target.value }));
    }


    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: color}}>
                <h1 style={{fontSize: range + 'px'}}>{h1}</h1>
                <fieldset>
                    <legend>CheckBox</legend>

                {cbc}
                <div className="cb"><input type="checkbox" id="A"  /><span className="cb">A</span><label className="cb-svg" htmlFor="A">{cbc}</label></div>
                    <div className="cb"><input type="checkbox" id="B"  /><span className="cb">B</span><label className="cb-svg" htmlFor="B">{cbc}</label></div>
                    <div className="cb"><input type="checkbox" id="C" /><span className="cb">C</span><label className="cb-svg" htmlFor="C">{cbc}</label></div>
                    <div className="cb"><input type="checkbox" id="D"  /><span className="cb">D</span><label className="cb-svg" htmlFor="D">{cbc}</label></div>
                </fieldset>
                <fieldset>
                    <legend>TEXT</legend>
                    <input type="text" value={text1} onChange={handleText1} style={{ backgroundColor: error ? 'crimson' : null }} />
                    <input type="text" ref={text2} />
                    <input type="text" value={text3} onChange={handleH1} />
                    <button type="button" className="blue" onClick={_ => console.log('text1:', text1)}>read 1</button>
                    <button type="button" className="red" onClick={readRed}>read 2</button>
                    <button type="button" className="yellow" onClick={_ => setH1(text3)}>H1</button>
                </fieldset>

                <fieldset>
                    <legend>MORE TEXT</legend>
                    <input type="text" value={texts.textA} name="textA" onChange={handleTexts} />
                    <input type="text" value={texts.textB} name="textB" onChange={handleTexts} />
                    <input type="text" value={texts.textC} name="textC" onChange={handleTexts} />
                    <button type="button" className="blue" onClick={_ => console.log('texts:', texts)}>read all texts</button>
                </fieldset>

                <fieldset>
                <legend>COLOR & RANGE</legend>
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                    <input type="range" min={20} max={60} value={range} onChange={e => setRange(+e.target.value)} />
                </fieldset>

                <fieldset>
                <legend>SELECT</legend>

                    <select value={select} onChange={e => setSelect(+e.target.value)}>
                        {
                            animals.map(a => <option key={a.id} value={a.id}>{a.name}</option>)
                        }
                    </select>
                    <button type="button" className="blue" onClick={_ => console.log('animal:', select, animals.find(a => a.id === select).name)}>what?</button>

                </fieldset>

            </header>


        </div>
    );
}

export default App;