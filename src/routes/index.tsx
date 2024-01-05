import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
    //const {toggleTheme} = useThemeContext();
    const {toggleDrawer, setDrawerOptions} = useDrawerContext();
    
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
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawer}>Toggle Drawer</Button>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}