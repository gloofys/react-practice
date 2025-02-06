import  {useState} from 'react'

const TodoList = () => {
    const [stuffs, setStuffs] = useState([])
    const[inputValue, setInputValue] = useState('')
const handleSubmit = e => {
        e.preventDefault()
    if(inputValue.trim()) {
        setStuffs([...stuffs, inputValue])
        setInputValue('')
    }
};
    const handleChange = e => {
        setInputValue(e.target.value)
    }

    return <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder="Add a new Todo" />
            <button type="submit">Add Todo</button>
        </form>
        <ul>
            {stuffs.map((stuff, index) => (
                <li key={index}>{stuff}</li>

            ))}

        </ul>
    </div>
}
export default TodoList
