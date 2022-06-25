/*

  Se hace el paso despues de usar el custom hook, se hace la destructuracion
  del state

*/

import { useForm1 } from '../hooks/useForm';

export const FormWithCustomHook1 = () => {
 
  // my custom hook useForm y se le pasa el objeto en base a los campos de formulario
  const { formState, onInputChange } = useForm1({
    username: '',
    email: '',
    password: '',
  });

  // destructuramos los campos del form
  const { username, email, password } = formState;

  return (
    <>
      <h1>Form With Custom hook</h1>
      <hr />

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

    </>
  )
}
