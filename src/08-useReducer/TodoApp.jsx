import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../hooks'


export const TodoApp = () => {  
  
  // llamamos el custom hook useTodo
  const {todos, todosCount, pendingTodosCount, handleRemoveTodo, onToggleTodo, handleNewTodo} = useTodo();

  return (
    <>
      <h1>TodoApp: <span className="text-success">{ todosCount }</span> | <small>pendientes: <span className="text-danger">{ pendingTodosCount }</span></small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos}
            onRemoveTodo={ id => handleRemoveTodo(id) }
            onToggleTodo={ id => onToggleTodo(id) }
          />          
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          <TodoAdd 
            onNewTodo={ todo => handleNewTodo(todo) } 
          />
        </div>
      </div>
    </>
  )
}
