import { LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
import { IListagemPessoa } from "../../services/api/pessoas/PessoasService";
import { Environment } from "../../environment";

interface IDataTableProps {
    linhas: IListagemPessoa[];
    isLoading: boolean;
    registrosCount: number;
    pagina: number;
}
export const DataTable: React.FC<IDataTableProps> = ({ linhas, isLoading, registrosCount, pagina }) => {



    return (
        <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
            <Table aria-label="Tabela de consulta de registros">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nome completo</TableCell>
                        <TableCell align="center">E-mail</TableCell>
                        <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {linhas.map(linha => (
                        <TableRow key={linha.id}>
                            <TableCell align="center">{linha.nomeCompleto}</TableCell>
                            <TableCell align="center">{linha.email}</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                {registrosCount == 0 && !isLoading && (<caption>{Environment.LISTAGEM_VAZIA}</caption>)}
                <TableFooter>
                    {isLoading && (
                        <TableRow>
                            <TableCell colSpan={3} align="center"><LinearProgress variant="indeterminate" sx={{ width: '100%' }} /></TableCell>
                        </TableRow>)}
                    {(!isLoading && registrosCount > 0 && registrosCount > Environment.LIMITE_DE_LINHAS) && (
                        <TableRow>
                            <TableCell colSpan={3}>
                                <Pagination count={Math.ceil(Number(registrosCount/Environment.LIMITE_DE_LINHAS))} page={pagina} />
                            </TableCell>
                        </TableRow>)}
                </TableFooter>
            </Table>
        </TableContainer>
    );
}