import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina tituloDaPagina="Página Inicial" barraDeFerramentas={<FerramentasDaListagem mostrarInputBusca />}>
            Teste
        </LayoutBaseDePagina>
    );
}