import React from "react";
import propTypes from "prop-types";

export class Home extends React.Component{
    render(){
        return(
            <div className="container">
                <p>Name is:{this.props.name}</p>
                <p>Age is:{this.props.age}</p>
                <p>Object name is:{this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                {this.props.children}
            </div>

        )
    }
}

Home.propTypes ={
    name: propTypes.string,
    age:propTypes.number,
    user:propTypes.object,
    children:propTypes.element.isRequired
}