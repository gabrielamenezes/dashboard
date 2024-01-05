import { createContext, useCallback, useContext, useState } from "react";

//tipagem das propriedades que o meu theme context irá prover
interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawer: () => void;
    drawerOptions: IDrawerOptions[];
    setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}
interface IDrawerContextProviderProps {
    children: React.ReactNode;
}
interface IDrawerOptions {
    iconName: string,
    itemLinkText: string,
    path: string,
}
const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<IDrawerContextProviderProps>  = ({children}) => {
    const[isDrawerOpen, setIsDrawerOpen] = useState(false);
    const[drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);
    const toggleDrawer = useCallback(() => {
        setIsDrawerOpen(oldDrower => !oldDrower)
    },[])
    
    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions);
    },[])
    return (
        <DrawerContext.Provider value={{isDrawerOpen,toggleDrawer, drawerOptions, setDrawerOptions: handleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    )
}