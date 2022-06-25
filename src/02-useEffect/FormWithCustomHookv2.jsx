/*

  Se hace la expancion con el espreed desde el custum hook useForm en el return (...formState)
  y ya con esto se pueden desestructurar desde el custum hook

*/

import { useForm2 } from '../hooks/useFormv2';

export const FormWithCustomHook2 = () => {
 
  // my custom hook useForm y se le pasa el objeto en base a los campos de formulario
  const { formState, onInputChange, onResetForm, username, email, password} = useForm2({
    username: '',
    email: '',
    password: '',
  });

  return (
    <>
      <h1>Form With Custom hook</h1>
      <hr />

      {/* <form> */}
        <input 
          type="text" 
          className="form-control"
          placeholder="Usename"
          name="username"
          value={ username } 
          onChange={ onInputChange }
        />

        <input 
          type="email" 
          className="form-control mt-2"
          placeholder="correo@correo.com"
          name="email"
          value={ email }
          onChange={ onInputChange }
        />

        <input 
          type="password" 
          className="form-control mt-2"
          placeholder="Contraseña"
          name="password"
          value={ password }
          onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-primary">Borrar</button>
      {/* </form> */}


    </>
  )
}
