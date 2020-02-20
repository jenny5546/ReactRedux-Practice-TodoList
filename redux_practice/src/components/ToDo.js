import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>DEL</button>
      </Link>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
    
 //ownProps는 ToDo라는 component에서 오는 id, text..등등을 말하는 것. 
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    //we don't need any arguments in this function onBtnClick
    };
};

//state는 갖고 올 필요없음 그래서 null
export default connect(null, mapDispatchToProps)(ToDo);
//hi