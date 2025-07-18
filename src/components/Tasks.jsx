import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react"; // fonte: https://lucide.dev/guide/packages/lucide-react
import { useNavigate } from "react-router-dom";
import Button from "./Button";

// uma alternativa seria usar :
// function Tasks({ tasks, onTaskClick, onDeleteTaskClick })
// assim não é necessário usar o props.tasks, props.onTaskClick, props.onDeleteTaskClick, ...
// irei deixar com props para deixar mais modular, pois pode ser que em outro 
// momento eu precise passar mais parametros para o componente, não imporando a ordem que forem passados

function Tasks(props) {
    const navigate = useNavigate(); // useNavigate é um hook do React Router que permite navegar para outra rota

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams(); // é uma boa práticara usar URLSearchParams para criar uma query string, pois essa função ja valida tudo oque é necessário
        query.set("title", task.title);
        query.set("description", task.description);

        navigate(`/task?${query.toString()}`);

        // Não é possível usar useNavigate diretamente dentro da função onSeeDetailsClick, pois useNavigate é um hook, e hooks não podem ser chamados dentro de funções normais, loops ou condições.
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">

            {/* Para controle do React, é necessário colocar uma key em cada elemento do array */}
            {/* para cada task, eu quero renderizar um paragrafo com o titulo da task */}
            {props.tasks.map((task) => (
                <li key={task.id}
                    className="gap-2 flex">
                    <button
                        onClick={() => props.onTaskClick(task.id)} // ao clicar no botão, chama a função onTaskClick passando o id da task (precisa ser um arrow function para não chamar a função imediatamente)
                        className={`flex text-left w-full cursor-pointer bg-slate-400 text-white p-2 rounded-md ${task.isCompleted ? "line-through" : ""}`}> {/* Para usar o template string do JS, é necessário usar o `${}` dentro do {} */}
                        {task.isCompleted && <CheckIcon />}
                        {task.title}
                    </button>

                    <Button
                        onClick={() => onSeeDetailsClick(task)} // ao clicar no botão, navega para a rota /task passando os parametros de pesquisa title e description
                    >
                        <ChevronRightIcon />
                    </Button>

                    <button
                        onClick={() => props.onDeleteTaskClick(task.id)}
                        className="cursor-pointer bg-slate-400 text-white p-2 rounded-md hover:bg-red-500 transition-colors duration-200">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;
