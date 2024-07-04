import React from 'react';
import './App.css';
import './buttons.scss'
import './Styles/netflix.scss';
import Apple from './Components/Apple'
import Kopija from './Components/Kopija'
import Accordion from './Components/Accordion'
// import Header from './Components/Header'
function App() {



    return (
        <div className="App">
            <header className="App-header">
          
                <div>
                  
                    <nav className="form">
                        <form className="form-inline">
                            <select className="form-control">
                                <option>English</option>
                                <option>Ryckij</option>
                            </select>
                            <button className="red" type="submit" onClick={_=>}>Sign In</button>
                        </form>
                    </nav>
                </div>
                <Kopija />
                <Apple />
                <h1>FAQs Questions</h1>
                <Accordion />
                <p style={{ fontSize: '15px', marginTop: '30px' }}>Ready to watch? Enter your email to create or restart your membership.</p>



            </header>
        </div>
    );
}



export default App;