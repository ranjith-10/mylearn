import React, { Component } from "react";

class Button2 extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.incrementby1}>INCREMENT BY 1</button>
            </>
        );
    }
}

export default Button2;
