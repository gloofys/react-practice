import{useRef} from "react";

const FocusInput = () => {
    const inputValue = useRef(null);
    const handleFocus = ()=>{
        inputValue.current.focus();
        inputValue.current.value='Fred';

    }

    return (
        <div>
            <input ref={inputValue} type="text" />
            <button onClick={handleFocus}>focus on Input</button>

        </div>
    )
}
export default FocusInput
