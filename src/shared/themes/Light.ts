import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
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
            default: '#f7f6f3', //usado no fundo
            paper: '#fff', //cor de card
        }
    }
});