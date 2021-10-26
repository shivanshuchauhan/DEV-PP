// ReactDOM.render(
//     React.createElement("h1",null,"Hey i am rendered from react !!"),
//     document.querySelector("#root")
// );



// ReactDOM.render(<h1>Hello from react</h1>, document.querySelector("#root"));

// stateless functional component sfc
let names = ["penny" , "sheldon" , "leonard" , "howard" , "rajesh"];

// function BigHello() {
//     return (
//         <React.Fragment>
//           <Hello name="steve"></Hello>  
//           <Hello name="leonard"></Hello>
//           <Hello name="sheldon"></Hello>
//           <Hello name="penny"></Hello>
//           <Hello name="howard"></Hello>
//         </React.Fragment>
//     );
// }
function BigHello() {
  return (
    <React.Fragment>
      { names.map(function(name){
        return <Hello key={name} name={name}></Hello>
      })}
    </React.Fragment>
  );
}
  
function Hello(props){
    // {name: "steve"}
    return <h1>Hello from {props.name} component !!</h1>
}

//what to render and where to render
ReactDOM.render(<BigHello></BigHello>,document.querySelector("#root"));


