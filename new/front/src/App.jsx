
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <div class="topline">
                    <p>
                        Nauju ideju svetaine <span class="LearnMore"> Skaityti daugiau</span>
                    </p>
                </div>
                <div class="menuContainer">
                    <div class="topLogo">
                        <img src="" alt="logo" class="logoImg" />
                    </div>
                    <nav class="topNavContainer">
                        <ul class="topUlcontainer">
                            
                            <li><a href="#" class="icon  "><span class="label">Apie</span></a></li>
                            <li><a href="#" class="icon  "><span class="label">Naujos idejos</span></a></li>
                            <li><a href="#" class="icon  "><span class="label">Komanda</span></a></li>
                            <li><a href="#" class="icon  "><span class="label">Administravimas</span></a></li>
                           

                        </ul>
                        <button class="btn reqestDemoTop">Prisijungti</button>
                        <button class="btn reqestDemoTop">Registracija</button>
                    </nav>
                </div>
            </header>

        </div>
    );
}

export default App;
