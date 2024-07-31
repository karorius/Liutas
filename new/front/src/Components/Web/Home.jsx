import { useEffect, useState } from 'react';

import '../../Style/App1.scss';
import Card from './Parts/Card';

export default function Home() {


    return (
        <div>
       
            <main className="mainContainer">
                <section className="mainContainerSectionOne">
                    <h2 className="topHead">Lengvas sprendimas pradedantiemsiems<br />valdyti ir vykdyti projektus biudžeto ribose</h2>
                    <button className="topHeadBtn">Prašyti Demo</button>
                </section>
               <Card/>

            </main>
        </div>

    )
}