import { useEffect, useState } from 'react';
import '../../../Style/App1.scss'
import Footer from './Footer';
import Header from './Header';
import '../../../Style/App.scss'
import Menu from './Menu';
import '../../../Style/App4.scss'


export default function Layout({children}) {


    return (
        <>
        <div>
       
            <Header />
                <Menu/>
               {children}

                <Footer />
           
        </div>
</>
    )
}