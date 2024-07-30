import { useEffect, useState } from 'react';
import '../../Style/App.scss';
import Footer from './Footer';
import Header from './Header';
import '../../Style/App1.scss';
import Card from './Card';
export default function Layout({children}) {


    return (
        <div>
            <Header />
            <main className="mainContainer">
                <section className="mainContainerSectionOne">
                    <h2 className="topHead">Lengvas sprendimas pradedantiemsiems<br />valdyti ir vykdyti projektus biudžeto ribose</h2>
                    <button className="topHeadBtn">Prašyti Demo</button>
                </section>
               <Card/>
               
               {children}

                <Footer />


            </main>
        </div>

    )
}