import { useState } from "react";
import Input from "./Input";

function AddTasks(props) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

      {/* Como os inputs são repetitivos, podemos criar um componente Input e reutilizar ele */}

      <Input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          // verifica se o título ou descrição estão vazios
          if (!title.trim() || !description.trim()) { // .trim() para tirar espaços em branco
            return alert("Título e descrição são obrigatórios!");
          }

          props.onAddTaskSubmt(title, description);
          setTitle("");
          setDescription("");
        }}
        className="cursor-pointer bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600 transition-colors duration-200">
        Adicionar Tarefa
      </button>
    </div>
  )
}

export default AddTasks;