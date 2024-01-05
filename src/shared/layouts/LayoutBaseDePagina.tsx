import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import { useDrawerContext } from "../contexts";

//componente de página
// usar ele dentro de cada uma das rotas que quisermos ter esse layout
interface ILayoutBaseDePaginaProps {
    tituloDaPagina: string,
    barraDeFerramentas?: ReactNode, //pode ser undefined porque por algum motivo eu posso não querer mostrá-la
    children: React.ReactNode,
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({children, tituloDaPagina, barraDeFerramentas}) => {
    const theme = useTheme();
    const smValue = useMediaQuery(theme.breakpoints.down('sm'))
    const mdValue = useMediaQuery(theme.breakpoints.down('md'))
    const {toggleDrawer} = useDrawerContext();
    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" gap={1} height={smValue ? 6 : mdValue ? 8 : 12} >
                {smValue && 
                    <IconButton onClick={toggleDrawer}>
                        <Icon>menu</Icon>
                    </IconButton>
                }
                
                <Typography variant={smValue ? "h5" : mdValue ? "h4" : "h3"} component="h2" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                    {tituloDaPagina}
                </Typography>
            </Box>
            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}
            
            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};