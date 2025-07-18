function Button(props) {
    return (
        <button
            {...props}
            className="cursor-pointer bg-slate-400 text-white p-2 rounded-md">

            {props.children}  {/* props.children permite que o conteúdo dentro do componente Button seja renderizado aqui */}

        </button>
    );
}

export default Button;