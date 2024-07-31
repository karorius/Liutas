import { createContext, useEffect, useState, useCallback } from "react";
import Page404 from '../Components/Common/Page404';
import Home from '../Components/Web/Home';
import Register from '../Components/Common/Register';
import Web from '../Components/Web/Parts/Layout';
import Login from "../Components/Common/Login";
import Layout from "../Components/Web/Parts/Layout";
import * as l from '../Constants/url';

const RouterContext = createContext([]);
const Apie = _ => {
    return (
        <div>
            <h1>              Taip pat jie taiko mažesnius reikalavimus augimui nei rizikos kapitalo įmonės,
                              tačiau jiems labai svarbu verslininko asmeninės savybės. 
                              Neformalūs investuotojai laikosi „tiesioginės kontrolės“ nuostatos,
                              t. y. pasitelkdami patirtį jie seka savo investicijas.</h1>
            <a href="/#Apie/22">Apie</a>
            
            <a href="/#">Home</a>
        </div>
    );
}



const Router = _ => {
    const [route, setRoute] = useState('');
    const [params, setParams] = useState([]);

    const handleHashChange = useCallback(_ => {
        const hash = window.location.hash.split('/');
        hash[0] || (hash[0] = '#');
        setRoute(hash.shift());
        setParams(hash);

    }, [setRoute, setParams]);

    useEffect( _ => {
        const hash = window.location.hash.split('/');
     
        hash[0] || (hash[0] = '#');
        setRoute(hash.shift());
        setParams(hash);

        window.addEventListener('hashchange', handleHashChange);

       return _ => window.removeEventListener('hashchange', handleHashChange);
    }, [handleHashChange]);
   
    const routes = [

        {path:'',pc:0, component: null},
        {path: '#', pc: 0, component: <Web><Home/></Web>},
      {path: '#Apie' , pc: 0, component : <Web><Apie/></Web>},
      
        {path: '#Register', pc: 0, component: <Register/>},
        {path: '#Login', pc: 0, component: <Login/>}
    ]
    console.log('route',route);
    
    const routeComponent = routes.find(r => r.path ===route && r.pc ===params.length)?.component ?? <Page404/>
    return (
        <RouterContext.Provider value={params}>
           {routeComponent}
           
        </RouterContext.Provider>
    )
}
export {
    RouterContext, Router
}