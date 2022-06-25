import { useState, useEffect } from 'react'
import { Message } from './Message';


export const SimpleForm = () => {
 
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'fernando@google.com'
  })

  const { username, email } = formState;

  const onInputChange = ( {target} ) => {
    const { name, value } = target;
    // console.log(name, value);
    setFormState({
      ...formState,
      [name]: value
    })    
  }


  // solo se dispara cuando se renderiza por primera vez el componente
  useEffect(() => {
    // console.log('useEffect called!!')
  }, []);

  // Se renderiza cada vez que el formulario cambia, culauqier elemento
  useEffect(() => {
    // console.log('formState change!!')
  }, [formState]);

  // Se renderiza solo cuando el email cambia
  useEffect(() => {
    // console.log('email change!!')
  }, [email]);




  return (
    <>
      <h1>Simple Form</h1>
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

      <br />
      
      {
        username === 'strider2' && <Message />
      }

    </>
  )
}
