import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Swal from 'sweetalert2'

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { IListagemPessoa, PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, LinearProgress, Pagination, IconButton, Icon } from "@mui/material";
import { Environment } from "../../shared/environment";

export const ListagemDePessoas: React.FC = () => {
  const [linhas, setLinhas] = useState<IListagemPessoa[]>([])
  const [contagemDeRegistros, setContagemDeRegistros] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { debounce } = useDebounce();
  const [searchParams, setSearchParams] = useSearchParams();


  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams])

  const pagina = useMemo(() => {
    return Number(searchParams.get('pagina') || '1');
  }, [searchParams])

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      PessoasService.getAll(pagina, busca)
        .then((result) => {
          setIsLoading(false);
          if (result instanceof Error) {
            alert(result.message)
          } else {
            setLinhas(result.data)
            setContagemDeRegistros(result.totalCount)
          }
        })
    });

  }, [busca, debounce, pagina])

  const handleDelete = (id:number) => {
    Swal.fire({
      title: "Realmente deseja apagar?",
      text: "Você não poderá desfazer essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!"
    }).then((result) => {
      if(result instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: result.message,
        });
      }
      if (result.isConfirmed) {
        PessoasService.deleteById(id)
        setLinhas(oldLinhas => [...oldLinhas.filter(oldLinha => oldLinha.id !== id)])
        Swal.fire({
          title: "Deletado!",
          text: "O usuário foi deletado.",
          icon: "success"
        });
      }
    });
  }
  return (
    <LayoutBaseDePagina
      tituloDaPagina="Listagem de pessoas"
      barraDeFerramentas={
        <FerramentasDaListagem
          textoBotaoNovo="Nova Pessoa"
          mostrarInputBusca
          textoDaBusca={busca}
          aoMudarTextoDaBusca={(texto) => setSearchParams({ busca: texto, pagina: '1' }, { replace: true })}
        />}>
           <TableContainer component={Paper} variant="outlined" sx={{ m: 1, width: 'auto' }}>
            <Table aria-label="Tabela de consulta de registros">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Identificador</TableCell>
                        <TableCell align="center">Nome completo</TableCell>
                        <TableCell align="center">E-mail</TableCell>
                        <TableCell align="center">Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {linhas.map(linha => (
                        <TableRow key={linha.id}>
                            <TableCell align="center">{linha.id}</TableCell>
                            <TableCell align="center">{linha.nomeCompleto}</TableCell>
                            <TableCell align="center">{linha.email}</TableCell>
                            <TableCell align="center">
                              <IconButton size="small" onClick={() => handleDelete(linha.id)}>
                                <Icon>delete</Icon>
                              </IconButton>
                              <IconButton size="small" onClick={() => navigate(`/pessoas/detalhe/${linha.id}`)}>
                                <Icon>edit</Icon>
                              </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                {contagemDeRegistros == 0 && !isLoading && (<caption>{Environment.LISTAGEM_VAZIA}</caption>)}
                <TableFooter>
                    {isLoading && (
                        <TableRow>
                            <TableCell colSpan={3} align="center"><LinearProgress variant="indeterminate" sx={{ width: '100%' }} /></TableCell>
                        </TableRow>)}
                    {(!isLoading && contagemDeRegistros > 0 && contagemDeRegistros > Environment.LIMITE_DE_LINHAS) && (
                        <TableRow>
                            <TableCell colSpan={3}>
                                <Pagination count={Math.ceil(Number(contagemDeRegistros/Environment.LIMITE_DE_LINHAS))} page={pagina} onChange={(_, newPage) => setSearchParams({busca, pagina: newPage.toString()}, {replace: true})}/>
                            </TableCell>
                        </TableRow>)}
                </TableFooter>
            </Table>
        </TableContainer>
      {/* <DataTable linhas={linhas} isLoading={isLoading} registrosCount={contagemDeRegistros} pagina={pagina}  /> */}
    </LayoutBaseDePagina>
  );
}