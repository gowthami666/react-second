import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
 
class App extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="row">
                <Header/>
                </div>
                <div className="row">
                <Home name={"Harry"} age={26} />
                </div>
            </div>
        );
    }
}

render(<App/>,window.document.getElementById("app"));