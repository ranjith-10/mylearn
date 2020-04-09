import React, { Component } from "react";
import "./App.css";
import Button from "./Button1.js";
import { connect } from "react-redux";
import { submit, incrementby1, incrementby2 } from "./action/Action.js";
import TextField from "./TextField";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Redux-Counter:{this.props.count}</p>
                    <TextField />
                    <Button onClick={this.props.submit} text="Submit" />
                    <Button onClick={this.props.incrementby1} text="INCREMENTBY1" />
                    <Button onClick={this.props.incrementby2} text="INCREMENTBY2" />
                </header>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const mapDispatchToProps = dispatch => {
    return {
        submit: () => dispatch(submit()),
        incrementby1: () => dispatch(incrementby1()),
        incrementby2: () => dispatch(incrementby2())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
