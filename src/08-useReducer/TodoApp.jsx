import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd';

// initial state reducer
const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
]



export const TodoApp = () => {  
  // definimos el reducer
  // se le pasa: nuestro reducer(todoReducer y el state inicial)
  // obtenemos: el state(todos) y la funcion modificadora(dispatch)
  // Al dispatch se le tien que pasar la action: la cual debe incluir el type y payload
  const [ todos, dispatch ] = useReducer( todoReducer, initialState );


  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch( action );
  }




  return (
    <>
      <h1>TodoApp: 10 | <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
          />
          
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          <TodoAdd onNewTodo={ todo => handleNewTodo(todo) } />
        </div>
      </div>

    </>
  )
}
