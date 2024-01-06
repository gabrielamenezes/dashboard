import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
    return (
        <LayoutBaseDePagina tituloDaPagina="Página Inicial" barraDeFerramentas={<FerramentasDeDetalhe />}>
            Teste
        </LayoutBaseDePagina>
    );
}