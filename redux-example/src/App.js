import React, { Component } from "react";
import "./App.css";
import Button1 from "./Button1.js";
import Button2 from "./Button2.js";
import Button3 from "./Button3.js";
import { connect } from "react-redux";
import { submit, incrementby1, incrementby2 } from "./action/Action.js";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { value: 0 };
    //     this.onchange = this.onchange.bind(this);
    // }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Redux-Counter:{this.props.count}</p>
                    <Button1 submit={this.props.submit}  />
                    <Button2 incrementby1={this.props.incrementby1} />
                    <Button3 incrementby2={this.props.incrementby2} />
                </header>
            </div>
        );
    }

    // onchange = event => {
    //     this.setState({ value: event.target.value });
    // };
}

function mapStateToProps(state) {
    return {
        count: state
    };
}

const mapDispatchToProps = dispatch => {
    return {
        submit: () => dispatch(submit()),
        incrementby1: () => dispatch(incrementby1()),
        incrementby2: () => dispatch(incrementby2())
    };
};
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
