import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {

  // State (Estadp) é uma forma de armazenar dados dentro de um componente React
  // useState é um hook do React que permite criar estados dentro de componentes funcionais
  // é uma boa prática criar um estado em casos onde a interface precisa ser atualizada dinamicamente
  // caso não seja necessário atualizar a interface, não é necessário usar o useState, ou seja uma variavel normal 

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // useEffect é um hook do React que permite executar um código quando o componente é renderizado
  // nesse caso está sendo usado para salvar as tasks no localStorage, para que mantenha salvas mesmo após o recarregamento da página
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // o segundo parametro é um array de dependencias, ou seja, o useEffect será executado sempre que o estado tasks for atualizado

  // === EXEMPLO DOS DADOS VINDO DE UMA API ===
  // puxar os dados da API {JSON} Placeholder (https://jsonplaceholder.typicode.com/)
  // useEffect(() => {

  //   async function fetchTasks() {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", { method: "GET" });
  //     const data = await response.json();

  //     setTasks(data);
  //   }

  //   fetchTasks(); // poderia 

  // }, []); // quando é inserido um array vazio, o useEffect é executado apenas na primeira renderização do componente, ou seja, quando o usuario acaba de acessar a página

  // ao clicar em uma task, eu quero atualizar o estado da task clicada para isCompleted: true ou false
  function onTaskClick(taskId) {

    const newTasks = tasks.map(task => {

      // para cada task, eu quero verificar se o id da task é igual ao id da task que foi clicada
      // se for, eu quero atualizar o estado da task para isCompleted: true ou false
      // se não for, eu quero retornar a task sem alterações
      if (task.id === taskId) {
        return {
          ...task, // ...task significa que eu quero todas as propriedades do objeto task, ou seja, irá retornar tudo
          isCompleted: !task.isCompleted // atribui o isCompleted para o inverso do que está atualmente
        }
      }

      return task; // retorna a task sem alterações
    })

    setTasks(newTasks); // atualiza o estado das tasks com o novo array de tasks
  };

  function onDeleteTaskClick(taskId) {

    // o .filter filtra o array de tasks e retorna um novo array com as tasks que não possuem o id igual ao id da task que foi clicada
    // ou seja, retorna tudo o que seja diferente do id da task que foi clicada

    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmt(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    }

    setTasks([...tasks, newTask]); // tasks.push(newTask) não funciona
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">

        <Title>
          Gerenciador de Tarefas
        </Title>

        <AddTask
          onAddTaskSubmt={onAddTaskSubmt}
        />
        <Tasks
          tasks={tasks} /* Para passar um parametro para um componente, usamos os props (tasks={tasks}) */
          onTaskClick={onTaskClick} /* é possível passar uma função como parametro para um componente tambem */
          onDeleteTaskClick={onDeleteTaskClick}
        />

      </div>
    </div>
  );
}

export default App;
