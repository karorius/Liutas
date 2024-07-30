import { useEffect, useState } from 'react';
import '../../Style/App.scss';
import Footer from './Parts/Footer';
import Header from './Parts/Header';
import '../../Style/App1.scss';
import Card from './Parts/Card';
import Layout from './Parts/Layout';
export default function Home() {


    return (
        <div>
            <Header />
            <main className="mainContainer">
                <section className="mainContainerSectionOne">
                    <h2 className="topHead">Lengvas sprendimas pradedantiemsiems<br />valdyti ir vykdyti projektus biudžeto ribose</h2>
                    <button className="topHeadBtn">Prašyti Demo</button>
                </section>
               <Card/>
               
                <Layout/>

                <Footer />


            </main>
        </div>

    )
}