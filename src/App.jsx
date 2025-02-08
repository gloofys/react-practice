
import {UserProvider} from "./components/UserContext.jsx";
import Counter from "./components/Counter.jsx";
import FocusInput from "./components/FocusInput.jsx";
import Timer from "./components/Timer.jsx";

const App = () => {
    return (
        <UserProvider>

            <FocusInput/>
            <Timer/>

        </UserProvider>
    );
}

export default App;
