
export const TodoItem = ({ todo , onRemoveTodo}) => {


  const buttonDeleteTodo = (e) => {
    console.log(e.target.ariaId)
  }


  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{todo.description}</span>
        <button 
          className="btn btn-danger"
            onClick={() => onRemoveTodo(todo.id)}
          >Borrar</button>    
      </li>
    </>
  )
}
