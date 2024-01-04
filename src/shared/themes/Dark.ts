import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#0050dc',
            dark: '#00348F',
            light: '#0096DB',
            contrastText: '#FFF',
        },
        secondary: {
            main: '#3c1450',
            dark: '#432351',
            light: '#812bab',
            contrastText: '#FFF',
        },
        background: {
            default: '#202124', //usado no fundo
            paper: '#303134', //cor de card
        }
    }
});