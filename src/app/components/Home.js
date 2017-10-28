import React from "react";
import propTypes from "prop-types";

export class Home extends React.Component{
    constructor(props)
    {
        super();
        this.state={
            age:props.age
        }
    }
        incrementAge()
        {
            this.setState({
                age: this.state.age+3
            })
        }
    
    render(){
        return(
            <div className="container">
                <p>Name is:{this.props.name}</p>
                <p>Age is:{this.state.age}</p>
                <button className="btn btn-primary" onClick={()=>this.incrementAge()}>Increase age</button>
            </div>

        )
    }
}

Home.propTypes ={
    name: propTypes.string,
    age:propTypes.number
}