import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd';

// initial state reducer
const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {  
  // definimos el reducer
  // se le pasa: nuestro reducer(todoReducer y el state inicial)
  // obtenemos: el state(todos) y la funcion modificadora(dispatch)
  // Al dispatch se le tien que pasar la action: la cual debe incluir el type y payload
  const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

  useEffect(() => {
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  
    
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatch( action );
  }

  const handleRemoveTodo = ( id ) => {
    // console.log({ id })
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const onToggleTodo = ( id ) => {
    // console.log({ id })
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }



  return (
    <>
      <h1>TodoApp: 10 | <small>pendientes: 2</small></h1>
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
