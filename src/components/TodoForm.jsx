import { useState } from "react";
import PropTypes from "prop-types"

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value , category);
    setValue("");
    setCategory("");
    //limpar os campos
  };

 
  return (
    <div>
      <h2>Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="trabalho">trabalho</option>
          <option value="pessoal">pessoal</option>
          <option value="estudos">estudos</option>
        </select>
        <button type="submit"> Criar Tarefa</button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {  
  addTodo: PropTypes.node,
};

export default TodoForm;
