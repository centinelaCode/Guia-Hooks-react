import { useState, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList'

// initial state reducer
const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del poder',
    done: false,    
  },
]


export const TodoApp = () => {

  const [todoInput, setTodoInput] = useState('')
  const [todos, dispatch] = useReducer(todoReducer, initialState)
  

  const handleNewTodo = ( e, todo ) => {  
    e.preventDefault();
    console.log(todo)
  }

  return (
    <>
      <h1>TodoApp: 10 | <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          <form
            onSubmit={(e) => handleNewTodo(e, 
                { 
                  id: new Date().getTime() * 3,
                  description: todoInput,
                  done: false,
                }
            )}
          >
            <input 
              type="text"
              placeholder="¿Que hay que hacer?"
              className="form-control"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-success"              
            >Agregar
            </button>
          </form>
        </div>
      </div>

    </>
  )
}
