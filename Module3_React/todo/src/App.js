import React, { Component } from 'react';
import InputBox  from "./components/InputBox/InputBox.jsx";
import TodosList from "./components/TodosList/TodosList.jsx";
//import addaudio from "./audioclips/addbutton.wav";
//import deleteaudio from "./audioclips/delete.wav";
//import {Howl, Howler} from 'howler';
// const audioclips = [
//   {sound: addaudio, label: 'addaudio'},
//   {sound: deleteaudio, label: 'deleteaudio'}
// ]

class App extends Component {
  state = {
    todos: [
      { id:"1", todo:"Learn JSX"},
      { id:"2", todo:"Learn CSS"},
      { id:"3", todo:"Learn ES6"},
      { id:"4", todo:"LEarn React"},
      { id:"5", todo:"Learn JS"}
    ]
   };
  //  SoundPlay = (src) => {
  //    const sound = new Howl({
  //      src
  //    })
  //    sound.play();
  //  }

   deleteTodo = (id)=>{
    //  const sound = new Howl({
    //    deleteaudio
    //  });
    //  sound.play();

     let updatedTodos=this.state.todos.filter( function(todoObj){
       if(todoObj.id == id){
         return false;
       }
       return true;
     });
     // console.log(updatedTodos);
     this.setState({
       todos:updatedTodos
     });
   };

   addTodo = (todo) => {
    //  const sound = new Howl({
    //    addaudio
    //  })
    //  sound.play();

     let updatedTodos = [
       ...this.state.todos,
       { id: this.state.todos.length +1, todo: todo },
     ];
     this.setState({
       todos:updatedTodos
     })
   };

  render() { 
    //Howler.volume(1.0);
    let todos=this.state.todos;
    let deleteTodo = this.deleteTodo;
    let addTodo = this.addTodo;
    return (
    <div className="App">
      <InputBox addTodo={addTodo}></InputBox>
      <TodosList todos = {todos} deleteTodo={deleteTodo}></TodosList>
    </div>
    );
  }
}
 
export default App;
