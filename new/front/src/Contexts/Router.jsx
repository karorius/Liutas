import { createContext, useEffect, useState, useCallback } from "react";
import Page404 from '../Components/Common/Page404';
import Home from '../Components/Web/Home';
import Register from '../Components/Common/Register';
import Web from '../Components/Web/Home';
import Login from "../Components/Common/Login";

const RouterContext = createContext([]);



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