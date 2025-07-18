function Input(props) {
    return (
        <input
            className="w-full p-2 rounded-md border-2 border-slate-300 focus:outline-none focus:border-blue-500"
            type={props.type}
            placeholder={props.placeholder}
            value={props.title}
            onChange={props.onChange} /> /*Tradução: ao mudar o valor, capture o valor do evento e use no setTitle, alterando assim o valor do titulo do state*/
    );

    // FAZER UM SPREAD OPERATOR PARA PEGAR TODOS OS PROPS E PASSAR PARA O INPUT TAMBEM FUNCIONA
    // Isso é útil se você quiser passar outros atributos para o input, como className, id, etc.

    // <input className="bla bla bla" {...props} />

}

export default Input;