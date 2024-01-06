import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps {

    //propriedades com ? são possivelmente undefined para que se a pessoa não quiser utilizar, tem a opção
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoSalvar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoVoltar?: boolean;

    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;

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

    mostrarBotaoNovoCarregando = false,
    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoVoltarCarregando = false,


    aoClicarEmNovo,
    aoClicarEmSalvar,
    aoClicarEmVoltar,
    aoClicarEmApagar,
}) => {

    const theme = useTheme();
    //const smValue = useMediaQuery(theme.breakpoints.down('sm'))
    //const mdValue = useMediaQuery(theme.breakpoints.down('md'))
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
            {/* para mostrar o botão de salvar o botão não pode estar carregando */}
            {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
                <Button variant='contained' onClick={aoClicarEmSalvar} color="primary" disableElevation startIcon={<Icon>save</Icon>}>
                    <Typography variant="button" noWrap>
                        Salvar
                    </Typography>
                </Button>
            )}
            {mostrarBotaoSalvarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
                <Button variant='outlined' onClick={aoClicarEmVoltar} color="primary" disableElevation startIcon={<Icon>arrow_back</Icon>}>
                    <Typography variant="button" noWrap>
                        Voltar
                    </Typography>
                </Button>
            )}
            {mostrarBotaoVoltarCarregando && (<Skeleton width={110} height={60} />)}

            {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button variant='outlined' onClick={aoClicarEmApagar} color="error" disableElevation startIcon={<Icon>delete</Icon>}>
                    <Typography variant="button" noWrap>
                        Apagar
                    </Typography>
                </Button>
            )}
            {mostrarBotaoApagarCarregando && (<Skeleton width={112} height={60} />)}

            {(mostrarBotaoNovo && (mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoVoltar)) && (
                <Divider variant="middle" orientation="vertical" />

            )}
            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
                <Button variant='outlined' onClick={aoClicarEmNovo} color="primary" disableElevation startIcon={<Icon>add</Icon>}>
                    <Typography variant="button" noWrap>
                        {textoBotaoNovo}
                    </Typography>
                </Button>
            )}
            {mostrarBotaoNovoCarregando && (<Skeleton width={96} height={60} />)}
        </Box>
    );
}