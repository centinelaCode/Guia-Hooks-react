
// State inicial
const initialState = [
  { 
    id: 1, 
    todo: 'Recolectar la piedra del Alma',
    done: false,
  }
];

// Mi funcion Pura Reducer
const todoReducer = ( state = initialState, action = {}) => {

  // verificamos en base al type la accion a realizar
  if( action.type === '[TODO] add todo'){
    return [ ...state, action.payload ];
  }

  return state;
}

// ejecutanmos el reducer (aqui solo carga el state inicial)
let todos = todoReducer();
// console.log(todos);

// para hacer una modificación al reducer necesitamos mandar una accion
// Objeto del nuevo todo
const newTodo = {
  id: 2, 
  todo: 'Recolectar la piedra del Poder',
  done: false,
}

//acciones: 
/* accion para agregar un todo 
  la cual debe contener 2 propiedades:
  type      =>    Se especifica que accion realizara: add, delte, update, delete all, etc
  payload   =>   Se especifica el nuevo valor si se requiere, por ejemplo para un nuevo todo o 
                 para actualizar un todo existente
*/
const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
}
// ejecutamos el reducer con la accion: addTodoAction
todos = todoReducer( todos, addTodoAction);




// para visaulizar el reducer
console.log({state: todos})