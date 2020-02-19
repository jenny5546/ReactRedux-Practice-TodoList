import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

// useParams() = extracts parameters from the url in one line
// detail 같은 경우 id= useParams() 라고 할 수 있다. 

function mapStateToProps(state, ownProps) {

  const {
    match: {
      params: { id }
    }
  } = ownProps;

  return { toDo: state.find(toDo => toDo.id === parseInt(id)) };
  //find: returns the value of the first element that matches 
};

export default connect(mapStateToProps)(Detail);