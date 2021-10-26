//class based stateful components
class Counter extends React.Component {
    //1. constructor method is the first one to fire
    constructor(props) {
        super(props); // super keyword  fires React.Components's constructor
        console.log(this.props);
        this.state = {
            count: 0,
            name:props.namee
        };//state is empty object
    }

    increment = ()=>{
        console.log("increment");
        this.setState({count : this.state.count+1
        })
    }

    decrement = ()=>{
        console.log("decrement");
        this.setState({
            count : this.state.count-1
        })
    }

    reset = ()=>{
        console.log("reset");
        this.setState({
            count: 0
        })

    }

    render() { //render() method is a method of React.Component class
        console.log("Inside render!!");
        console.log(this.props);
        console.log(this.props.namee);
        let count = this.state.count;

        return (
            <React.Fragment>
                <p className="badge bg-secondary d-inline-block m-2"> {count}</p>
                <div>
                   <button className="btn btn-primary m-2" onClick={this.increment}>+</button>
                   <button className="btn btn-danger m-2" onClick={this.decrement}>-</button>
                   <button className="btn btn-warning m-2" onClick={this.reset}>Reset</button>
                </div>
                
                
            </React.Fragment>
        );
    }
}

ReactDOM.render(<React.Fragment>
    
    {<div>
        <Counter namee="steve"></Counter>
        <Counter></Counter>
        <Counter></Counter>
    </div> }
    </React.Fragment>,document.querySelector("#root"));



