import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

// nesse componente, vamos usar o useSearchParams para acessar os parâmetros de pesquisa da URL e exibi-los na tela
// o ato de acessar os parâmetros de pesquisa da URL é chamado de "query string" ou "query params"
function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams(); // useSearchParams é um hook do React Router que permite acessar os parâmetros de pesquisa da URL
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
                <div className="w-[500px] space-y-4">

                    <div className="flex justify-center relative mb-6">
                        <button className="cursor-pointer absolute left-0 top-0 bottom-0 text-slate-100"
                            onClick={() => navigate(-1)}>
                            <ChevronLeftIcon />
                        </button>

                        <Title >
                            Detalhes da Tarefa
                        </Title>

                    </div>

                    <div className="bg-slate-400 p-4 rounded-md shadow">
                        <h2 className="text-xl text-slate-600 font-bold">{title}</h2>

                        <p className="text-slate-600">{description}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TaskPage;