// import React from 'react';
import { connect } from 'react-redux';
// import './styles/App.css';
import CounterWindow from "../components/CounterWindow";


const mapStateToProps = (state) => ({
    count: state.count
});

const Counter = connect(mapStateToProps)(CounterWindow)
export default Counter
