import { useFormv2 } from '../hooks/useFormv2'


export const TodoAdd = ({ onNewTodo }) => {

  // custom hook para formularios
  const { formState, onInputChange,onResetForm, description } = useFormv2({
    description: ''
  })

  // funcion para el envio del formulario
  const onFormSubmit = ( event ) => {  
    event.preventDefault();

    // validamos que tengamos algo en la descripcion
    if ( description.length <=1 ) return;

    // creamos el nuevo todo con la descripction del input
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    // ejecutamos la funcion y reseteamos el formulario
    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form
      onSubmit={ onFormSubmit }
    >
      <input 
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name='description'
        value={ description }
        onChange={ onInputChange }
      />
      <button
        type="submit"
        className="btn btn-success"    
      >Agregar
      </button>
    </form>
  )
}
