import React from "react";
import { connect } from "react-redux";
import { incrementAction, decrementAction } from "../actions";

//**issues action */
function App({value, incrementAction, decrementAction}) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>count: {value}</h1>
      <div>
        <button onClick={incrementAction}>increment</button>
        <button onClick={decrementAction}>decrement</button>
      </div>
    </div>
  );
}

//**map redux state to component props */
const mapStateToProps = state => ({
  value: state.value
});

//**map redux actions to component props */
const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(incrementAction()),
  decrementAction: () => dispatch(decrementAction())
});

//**higher order component */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
