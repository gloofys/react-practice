

import Profile from "./components/Profile.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import TodoList from "./components/TodoList.jsx";
import Counter from "./components/Counter.jsx";

const App = () => {
 return(
    <div>
        <Counter/>
        <Profile />
        <ShoppingList />
        <TodoList />
    </div>
    );
}

export default App;
