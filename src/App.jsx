import Counter from "./components/Counter.jsx";
import BasicEffect from "./components/BasicEffect.jsx";
import CounterEffect from "./components/CounterEffect.jsx";
import FetchDataEffect from "./components/FetchDataEffect.jsx";
import UserProfile from "./components/UserProfile.jsx";
import {UserProvider} from "./components/UserContext.jsx";
import UpdateUser from "./components/UpdateUser.jsx";

const App = () => {
    return (
        <UserProvider>

            <UserProfile/>
            <UpdateUser/>
        </UserProvider>
    );
}

export default App;
