import { useCounter } from '../hooks/useCounter'


export const CounterWithCustomHook = () => {

  // custom hook counter
  const { counter, increment, decrement, reset } = useCounter()

  return (
    <>
        <h1>Counter with Hook: { counter }</h1>

        <hr />

        <button 
          onClick={ () => increment(2) } 
          className="btn btn-primary"
        >+1</button>

        <button 
          onClick={ reset } 
          className="btn btn-secondary"
        >Reset</button>

        <button 
          onClick={ () => decrement(2) } 
          className="btn btn-danger"
        >-1</button>
    </>
  )
}
