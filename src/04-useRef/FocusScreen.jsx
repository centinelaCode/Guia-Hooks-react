import {useRef} from 'react'

export const FocusScreen = () => {

  const inputRef = useRef();
  // console.log(ref);

  const myClick = () => {
    // hacer focus o select al input con js
    // document.querySelector('input').select();

    console.log(inputRef.current.select())
  }

  return (
    <>
      <h1>Focus Screen [useRef]</h1>
      <hr />

      <input 
        
        name='spiderman'
        type="text" 
        className="form-control"
        placeholder="Ingrese su Nombre"
      />
      <input 
        type="text" 
        className="form-control"
        placeholder="Ingrese su Nombre"
      />
      <input 
        ref={ inputRef }
        type="text" 
        className="form-control"
        placeholder="Ingrese su Nombre"
      />
      <input 
        type="text" 
        className="form-control"
        placeholder="Ingrese su Nombre"
      />

      <button
        className="btn btn-success"
        onClick={ myClick }
      >Set Focus</button>
    </>
  )
}
