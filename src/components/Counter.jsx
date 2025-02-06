import  {useState} from 'react'

const Counter = () => {
    const [count, setCount] =useState(0)
    const increment = () => setCount(count + 1)
    return (
        <section>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        </section>
    )
}
export default Counter
