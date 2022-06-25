/* 
  Explicación de esto:  !!data && data[0];
  Si tenemos null o undefined y lo negamos:  !null o undefined = true
  Pero Si lo volvemos negar:                !!null o undefined = false

  Si hacemos destructuracion de false, javascript no marca error, por eso si no hay data
  no maracaria error, pero si hay data toma data[0]
*/

import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);  
  const { author, quote } = !!data && data[0];


  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />      

      { 
        isLoading 
        ? <LoadingQuote />
        : <Quote author={ author } quote={ quote } />
      }

      <button
        onClick={ () => increment() }
        disabled={ isLoading }
        className="btn btn-success"
      >Next quote</button>

    </>
  )
}
