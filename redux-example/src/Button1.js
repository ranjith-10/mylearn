import React, { Component } from "react";

class Button1 extends Component {
    render() {
        return (
            <>
                <input type="number"  />
                <button onClick={this.props.submit}>Submit</button>
            </>
        );
    }
}

export default Button1;
