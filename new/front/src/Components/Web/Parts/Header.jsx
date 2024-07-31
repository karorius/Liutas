


export default function Header() {

    return (
        <header>
               
                <div className="menuContainer">
                    <div className="topLogo">
                        <img src="../../logo.png" alt="logo" className="logoImg" />
                    </div>
                    <nav className="topNavContainer">
                    <ul className="topUlcontainer">
      <li>
        <a href="/#" ><span className="label">Pradzia</span></a></li>
      <li>
        <a href="/#" ><span className="label">Naujos idejos</span></a></li>
      <li>
        <a href="/#"><span className="label">Ape</span></a></li>
      <li>
        <a href="/#"><span className="label">Administravimas</span></a></li>
    </ul>
                        <button className="btn reqestDemoTop"><a href="#/register">Registruotis</a></button>
                        <button className="btn reqestDemoTop"><a href="#/login">Prisijungti</a></button>
                    </nav>
                </div>
            </header>
    )

}