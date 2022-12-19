import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {todos:[],isLoading:true};
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  deleteTodo(id){
    setInterval(() => {
      this.setState({isLoading:false});
    }, 2000);
    fetch(`http://localhost:3300/todos/${id}`,{
      "method":"DELETE"
    })
    .then(response=>response.json())
    .then(()=>this.loadTodos())
  }
  async loadTodos(){
    await fetch("http://localhost:3300/todos")
    .then(response=>response.json())
    .then(data=>this.setState({todos:data}))
  }
  componentDidMount(){
    fetch("http://localhost:3300/todos")
    .then(response=>response.json())
    .then(data=>this.setState({todos:data,isLoading:false}))
  }
 render(){
    return (
      <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Completed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.isLoading ? "Chargement.....":
                this.state.todos.map((todo)=>(
                  <TodoItem key={parseInt(todo.id)} todo={todo} onDelete={this.deleteTodo}/>
                ))
              }
            </tbody>
          </table>
      </div>
    )
 }
}
export default TodoList;