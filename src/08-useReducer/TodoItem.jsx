
export const TodoItem = ({ todo , onRemoveTodo, onToggleTodo}) => {


  const buttonDeleteTodo = (e) => {
    console.log(e.target.ariaId)
  }


  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span 
          onClick={ () => onToggleTodo( todo.id ) }
          className={ todo.done ? 'align-self-center text-decoration-line-through text-muted' : 'align-self-center' }
          >{todo.description}
        </span>
        <button 
          className="btn btn-danger"
           onClick={() => onRemoveTodo(todo.id)}
        >Borrar</button>    
      </li>
    </>
  )
}
