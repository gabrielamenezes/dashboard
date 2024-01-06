import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoVoltar?: boolean;
    aoClicarEmNovo?: () => void
    aoClicarEmSalvar?: () => void
    aoClicarEmVoltar?: () => void
    aoClicarEmApagar?: () => void
}
export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
    textoBotaoNovo = 'Novo',
    mostrarBotaoNovo = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoVoltar = true,

    aoClicarEmNovo,
    aoClicarEmSalvar,
    aoClicarEmVoltar,
    aoClicarEmApagar,
}) => {
    const theme = useTheme();
    return (
        <Box 
          display="flex"
          component={Paper}
          height={theme.spacing(5)}
          marginX={1}
          padding={1}
          paddingX={2}
          gap={1}
          alignItems="center">
            {mostrarBotaoSalvar && (
                <Button variant='contained' onClick={aoClicarEmSalvar} color="primary" disableElevation startIcon={<Icon>save</Icon>}>Salvar</Button>
            )}
            {mostrarBotaoVoltar && (
                <Button variant='outlined'onClick={aoClicarEmVoltar} color="primary" disableElevation startIcon={<Icon>arrow_back</Icon>}>Voltar</Button>
            )}
            {mostrarBotaoApagar && (
                <Button variant='outlined'onClick={aoClicarEmApagar} color="error" disableElevation startIcon={<Icon>delete</Icon>}>Apagar</Button>
            )}
            <Divider variant="middle" orientation="vertical"/>
            {mostrarBotaoNovo && (
                <Button variant='outlined' onClick={aoClicarEmNovo} color="primary" disableElevation startIcon={<Icon>add</Icon>}>{textoBotaoNovo}</Button>
            )}
        </Box>
    );
}