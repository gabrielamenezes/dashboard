import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard } from "../pages";

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
            iconName: 'shopping_bag',
            itemLinkText: 'Produtos',
            path: '/produtos'
        }
        ])
    },[setDrawerOptions])
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard/>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}