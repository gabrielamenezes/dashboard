import { createContext, useCallback, useContext, useState } from "react";

//tipagem das propriedades que o meu theme context irá prover
interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
}
const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}
interface IDrawerContextProviderProps {
    children: React.ReactNode;
}
export const DrawerProvider: React.FC<IDrawerContextProviderProps>  = ({children}) => {
    const[isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = useCallback(() => {
        setIsDrawerOpen(oldDrower => !oldDrower)
    },[])
    
    return (
        <DrawerContext.Provider value={{isDrawerOpen,toggleDrawer}}>
            {children}
        </DrawerContext.Provider>
    )
}