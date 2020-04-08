import React, { Component } from "react";

class Button3 extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.incrementby2}>INCREMENT BY 2</button>
            </>
        );
    }
}

export default Button3;
