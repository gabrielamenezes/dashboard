import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext, useThemeContext } from "../../contexts";
import { ListItemLink } from "./list-item-link/ListItemLink";

interface IMenuLateralProps {
    children: React.ReactNode;
}
export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const { toggleDrawer, isDrawerOpen, drawerOptions } = useDrawerContext();
    const {toggleTheme, themeName} = useThemeContext();
    /*
    default breakpoints of mui:
    xs, extra-small: 0px
    sm, small: 600px
    md, medium: 900px
    lg, large: 1200px
    xl, extra-large: 1536px
    */
    //useMediaQuery é um hook customizado que retorna um booleano
    //theme.breakpoints.down: retorna true se o tamanho da tela for menor que aquele passado por parâmetro
    const smValue = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <>
            <Drawer open={isDrawerOpen} variant={smValue ? 'temporary' : 'permanent'} onClose={toggleDrawer}>
                {/* box vai nos ajudar a definir o tamanho do drower, porque a largura vai ser definida pelo tamanho do conteúdo existente dentro */}
                <Box width={theme.spacing(28)} display="flex" flexDirection="column" height="100%">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center" >
                        <Avatar sx={{ height: theme.spacing(15), width: theme.spacing(15) }} alt="Foto do Usuário" src="https://media.licdn.com/dms/image/C4D03AQGeoHKx2kBSRA/profile-displayphoto-shrink_800_800/0/1662641626888?e=1709769600&v=beta&t=qz1KTsycNJGtc5NqFH-slo4PLVzQV1bIprHhIFJHFLc" />
                    </Box>
                    <Divider />
                    {/* flex=1 significa que o box vai ocupar todo o resto do espaço disponível */}
                    <Box flex={1}>
                        <List component="nav">
                            {
                                drawerOptions.map(drawerOption => (
                                    <ListItemLink key={drawerOption.path} onClick={smValue ? toggleDrawer : undefined} to={drawerOption.path} iconName={drawerOption.iconName} itemLinkText={drawerOption.itemLinkText} />
                                ))
                            }
                        </List>
                    </Box>

                    <Box>
                        <List component="nav">
                            <ListItemButton onClick={toggleTheme}>
                                <ListItemIcon>
                                    <Icon>{themeName === 'light' ? 'dark_mode' : 'light_mode' }</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Alternar Tema" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={smValue ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}