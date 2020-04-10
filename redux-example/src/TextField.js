import React, { Component } from "react";
import { connect } from "react-redux";

class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: 0
        };
    }

    handleChange(event) {
        this.setState(
            {
                inputvalue: { inputvalue: Number(event.target.value) }
            },
            () =>
                this.props.dispatch({
                    type: "SET_TEXTVALUES",
                    inputvalue: this.state.inputvalue
                })
        );
    }

    render() {
        return (
            <>
                <input type="number" onChange={this.handleChange.bind(this)} />
            </>
        );
    }
}

export default connect()(TextField);
// export default TextField;
