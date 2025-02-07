import React, {useEffect} from 'react'

const CounterEffect = () => {
    const [count, setCount] = React.useState(0)

    useEffect(() => {
        document.title = `${count}`;

    })

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>

        </div>
    )
}
export default CounterEffect
