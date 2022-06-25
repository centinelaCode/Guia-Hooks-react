import { useState, useMemo } from 'react'
import { useCounter } from "../hooks"


const heavyStop = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos...');    
  }

  return `${ iterationNumber } iteraciones realizadas`
}



export const MemoHook = () => {

  const {counter, increment} = useCounter(1500)
  const [show, setShow] = useState(true)

  const memorizeValue = useMemo(() => heavyStop(counter), [counter]);
  

  return (
    <>
      <h1>Counter: <small>{ counter }</small> </h1>
      <hr />

      <h4>{ memorizeValue }</h4>

      <button
        className="btn btn-primary"        
        onClick={ () => increment() }
      >+1</button>

<button
        className="btn btn-danger"        
        onClick={ () => setShow(!show) }
      >show/hide {JSON.stringify(show)} </button>
    </>
  )
}
