import React from "react";
import TodoList from "./Components/TodoList";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
