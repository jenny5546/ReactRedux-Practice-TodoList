import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {

  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>

      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>

    
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}


//PROPS 2가지: mapStateToProps는 결국 그냥 state(갖고오기), mapDispatchToProps 는 함수(state바꾸기)

/* HOW TO GET STATE FROM YOUR STORE??? */
//get the current state from the store to our home
function mapStateToProps(state) {
  return { toDos: state };
}

/* HOW TO Dispatch Redux in React */
function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text)) //a function addToDo created
  };
}

//Connect allows us to connect the redux store and our components
//connect takes the two arguments, mapStateToProps 랑 mapDispatchToProps.
export default connect(mapStateToProps, mapDispatchToProps)(Home);