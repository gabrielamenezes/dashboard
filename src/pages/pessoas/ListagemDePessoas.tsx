import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

export const ListagemDePessoas: React.FC= () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams])

    useEffect(() => {
        PessoasService.getAll(1, busca)
         .then((result) => {
            if(result instanceof Error) {
              alert(result.message)
            } else {
              console.log(result)
            }
         })
    },[busca])
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
            oi
        </LayoutBaseDePagina>
    );
}