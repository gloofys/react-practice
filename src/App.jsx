
import {UserProvider} from "./components/UserContext.jsx";
import Counter from "./components/Counter.jsx";

const App = () => {
    return (
        <UserProvider>

            <Counter/>

        </UserProvider>
    );
}

export default App;
