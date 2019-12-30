import React from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';

class CounterWindow extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     closeIcon: "/images/text-icons/prop-window-close.png",
        //     selectedTab: "Actions"
        // };

        // this.tabElements = {
        //     "Actions": {"icon": "property_action"},
        //     "Expressions": {"icon": "property_exp"}
        // }
        // this.closeWindow = this.closeWindow.bind(this);
    }

    dec = () => {
        this.props.dispatch( { type: "DECREMENT" })
    };

    inc = () => {
        this.props.dispatch( { type: "INCREMENT" })
    };
render() {
    return (
        <div className="App-header"> 
        hello
        
        <button onClick={ this.dec }> DEC </button>
        { this.props.count }
        <button onClick={ this.inc }> INC</button>
        </div>
    );
    }
}


export default CounterWindow;
