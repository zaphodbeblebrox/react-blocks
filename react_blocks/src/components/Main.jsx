import React from "react";
import "./static/Main.css"

const Main = (props) => {

    return(
        <div className="main flex-column">
            {props.children}
        </div>
    );
}

export default Main;