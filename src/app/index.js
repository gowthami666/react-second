import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
 
class App extends React.Component{
    render(){
        let user ={
            name:"potter",
            hobbies:["shopping","surfing internet"]
        }
        return (
            <div className="container">
                <div className="row">
                <Header/>
                </div>
                <div className="row">
                <Home name={"Harry"} age={26} user={user}>
                    <p>This is child of home component</p>
                </Home>
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));