import { useNavigate, useParams } from "react-router-dom"
import { LayoutBaseDePagina } from "../../shared/layouts";
import { FerramentasDeDetalhe } from "../../shared/components";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Form } from "@unform/web";
import { VTextField } from "../../shared/forms";

export const DetalheDePessoas: React.FC = () => {

    const { id = 'nova' } = useParams<'id'>();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        if(id !== 'nova') {
            setIsLoading(true);
            PessoasService.getById(Number(id))
            .then((result) => {
                setIsLoading(false);
                if(result instanceof Error) {
                    alert(result.message)
                    navigate('/pessoas');
                }else {
                    console.log(result)
                }
            })
        }
    }, [id, navigate])
    const handleSave = () => {
        console.log('save');
    }

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
            Swal.fire({
              title: "Deletado!",
              text: "O usuário foi deletado.",
              icon: "success"
            });
            navigate('/pessoas')
          }
        });
      }
    return (
        <LayoutBaseDePagina tituloDaPagina={id === 'nova' ? 'Nova pessoa' : 'Editar pessoa'} 
        barraDeFerramentas={
          <FerramentasDeDetalhe
            mostrarBotaoApagar={id !== 'nova'}
            mostrarBotaoNovo={id !== 'nova'}

            aoClicarEmSalvar={handleSave}
            aoClicarEmApagar={() => handleDelete(Number(id))}
            aoClicarEmVoltar={() => navigate(-1)}
            aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
          />
        }>
            {/* {isLoading && (
                <LinearProgress variant="indeterminate"/>
            )} */}

            <Form onSubmit={(dados) => console.log(dados)} initialData={{}}>
                <VTextField name={'nomeCompleto'} />
            <button type="submit">ok</button>
            </Form>
            detalhe de pessoas {id}
        </LayoutBaseDePagina>
    )
}