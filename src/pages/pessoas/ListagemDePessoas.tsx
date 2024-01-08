import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { FerramentasDaListagem, DataTable } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { IListagemPessoa, PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useDebounce } from "../../shared/hooks";

export const ListagemDePessoas: React.FC= () => {
  const [linhas, setLinhas] = useState<IListagemPessoa[]>([])
  const [contagemDeRegistros, setContagemDeRegistros] = useState(0)
  const [isLoading, setIsLoading] = useState(true);

  const {debounce} = useDebounce();
  const [searchParams, setSearchParams] = useSearchParams();


  const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams])

  //   const pagina = useMemo(() => {
  //     return searchParams.get('pagina') || '';
  // }, [searchParams])

    useEffect(() => {
      setIsLoading(true);
      debounce(() => {
        PessoasService.getAll(1, busca)
         .then((result) => {
            setIsLoading(false);
            if(result instanceof Error) {
              alert(result.message)
            } else {
              console.log(result)
              setLinhas(result.data)
              setContagemDeRegistros(result.totalCount)
            }
         })
      });

    },[busca, debounce])
    return (
        <LayoutBaseDePagina
        tituloDaPagina="Listagem de pessoas"
        barraDeFerramentas={
          <FerramentasDaListagem
            textoBotaoNovo="Nova Pessoa"
            mostrarInputBusca
            textoDaBusca={busca}
            aoMudarTextoDaBusca={(texto) => setSearchParams({busca: texto}, {replace: true})}
          />}>
            <DataTable linhas={linhas} isLoading={isLoading} registrosCount={contagemDeRegistros}/>
        </LayoutBaseDePagina>
    );
}