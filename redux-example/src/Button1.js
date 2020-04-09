import React, { Component } from "react";

class Button1 extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.onClick}>{this.props.text}</button>
            </>
        );
    }
}

export default Button1;

