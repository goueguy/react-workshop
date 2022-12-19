import "materialize-css/dist/css/materialize.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col s6">
          <TodoList/>
        </div>
        <div className="col s6">
        
        </div>
      </div>
    </div>
  );
}

export default App;
