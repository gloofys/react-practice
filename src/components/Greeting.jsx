const Greet = () => {

    const greetingMessage = "Hello"
    const date = new Date();
    return (
        <div>
        <h1>{greetingMessage}</h1>
            <p>Date: {date.getDate()}</p>
        </div>
    );
}
export default Greet