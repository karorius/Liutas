


export default function Header() {

    return (
        <header>
                <div className="topline">
                    <p>
                    Nauju ideju svetaine <span className="LearnMore"> Skaityti daugiau</span>
                    </p>
                </div>
                <div className="menuContainer">
                    <div className="topLogo">
                        <img src="../../logo.png" alt="logo" className="logoImg" />
                    </div>
                    <nav className="topNavContainer">
                    <ul className="topUlcontainer">
      <li>
        <a href="/#" ><span className="label">Apie</span></a></li>
      <li>
        <a href="/#" ><span className="label">Naujos idejos</span></a></li>
      <li>
        <a href="/#"><span className="label">Pradzia</span></a></li>
      <li>
        <a href="/#"><span className="label">Administravimas</span></a></li>
    </ul>
                        <button className="btn reqestDemoTop">Prisijungti</button>
                        <button className="btn reqestDemoTop">Registracija</button>
                    </nav>
                </div>
            </header>
    )

}