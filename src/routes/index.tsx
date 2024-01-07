import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemDePessoas } from "../pages";

export const AppRoutes = () => {
    //const {toggleTheme} = useThemeContext();
    const { setDrawerOptions} = useDrawerContext();
    
    useEffect(() => {
        setDrawerOptions([
        {
            iconName: 'home',
            itemLinkText: 'Página Inicial',
            path: '/pagina-inicial',
        },
        {
            iconName: 'group',
            itemLinkText: 'Pessoas',
            path: '/pessoas'
        }
        ])
    },[setDrawerOptions])
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard/>}/>
            <Route path="/pessoas" element={<ListagemDePessoas/>}/>
            {/* <Route path="/cidades/detalhe/:id" element={<Dashboard/>}/> */}
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}