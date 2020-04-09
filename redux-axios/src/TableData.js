import React, { Component } from "react";
import { connect } from "react-redux";

class TableData extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>Axios:</p>
            </div>
        );
    }
}

export default connect()(TableData);
