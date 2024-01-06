import { Search } from "@mui/icons-material";
import { Box, Button, Icon, InputAdornment, Paper, TextField, useTheme } from "@mui/material";
import { Environment } from "../../environment";

interface IFerramentasDaListagemProps {
    textoDaBusca?: string;
    mostrarInputBusca?: boolean;
    aoMudarTextoDaBusca?: (novoTexto: string) => void

    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarEmNovo?: () => void;
}
export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({textoDaBusca = '', mostrarInputBusca = false, aoMudarTextoDaBusca, textoBotaoNovo = 'Novo', mostrarBotaoNovo = true, aoClicarEmNovo}) => {
    const theme = useTheme();
    return (
        <Box display="flex"
           component={Paper}
           height={theme.spacing(5)}
           marginX={1}
           padding={1}
           paddingX={2}
           gap={1}
           alignItems="center">
            {mostrarInputBusca && (
                <TextField
                size="small"
                placeholder={Environment.INPUT_DE_BUSCA}
                value={textoDaBusca}
                //só vai executar a função, se ela for diferente de undefined
                onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)}
                InputProps={{endAdornment: (<InputAdornment position="end"><Search/></InputAdornment>)}}/>
            )}
            <Box flex={1} display="flex" justifyContent="end">
                {mostrarBotaoNovo && (
                    <Button variant='contained' onClick={aoClicarEmNovo} color="primary" disableElevation startIcon={<Icon>add</Icon>}>{textoBotaoNovo}</Button>
                )}
                
            </Box>
        </Box>
    );
}