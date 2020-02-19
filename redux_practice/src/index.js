import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Provider ** 



/*

CH1. COUNTER 
< Vanilla VER. > 

let count = 0; // "state": data that changes in you application

number.innerText = count;  // Innertext을 Count로 초기 설정. 

const updateText= () => {
    number.innerText = count; // Innertext를 계속해서 update 해주는 함수 
}

const handleAdd = () => {
    count++; 
    updateText();
}

const handleMinus = () => {
    count--;
    updateText();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

*/


/* 
CH1. COUNTER 
< REDUX VER. >

import { createStore } from "redux"; // Store basically creates space for your data

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span")

// Data is in one place and one place only => REDUX 
// Reducer is a function that modifies your data (only the reducer can modify your data)
// Action is the second parameter of the reducer
// Action: the way we communicate with the reducer

number.innerText = 0;

//Count modifier is called with the state and the action 

const ADD = "ADD";
const MINUS = "MINUS";


const countModifier = (count = 0, action) => { // state=0 : initializing your state
    switch(action.type){
        case ADD:
            return count+1;
        case MINUS:
            return count-1;
        default:
            return count;
    }
}; 


//whatever the modifier(reducer)  returns, that is going to be your data 

const countStore= createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange) //subscribe listens to changes on state

add.addEventListener("click", ()=>countStore.dispatch({type: ADD}));
minus.addEventListener("click", ()=>countStore.dispatch({type: MINUS}));
//dispatch an action= this will call the countModifier

*/


/*
CH2. TODO
< Vanilla VER. >

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");


const createToDo = toDo => {
    const li = document.createElement("li");
    li.innerText = toDo;
    ul.appendChild(li);
};

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    createToDo(toDo);
};

form.addEventListener("submit", onSubmit);


*/

/* 
CH2. TODO
< Redux VER. >

import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action
const addToDo= text => {
    return {
        type: ADD_TODO,
        text
    };
};

// Action
const deleteToDo = id => {
    return {
        type: DELETE_TODO, 
        id
    };
};

//YOU SHOULD NEVER MUTATE STATE!!!!!
const reducer = (state=[], action) => {

    switch(action.type){
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state ];
            // ... -> es6 spread
            //all the contents in the array, and a new object
            //직접 mutate 하지마라. 
        case DELETE_TODO:
            const cleaned = state.filter(toDo => toDo.id !== action.id);
            return cleaned;
            //filter does not mutate the array, it returns a new array.
        default:
            return state;
    }

};

const store= createStore(reducer);

//Dispatch Action 
const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
}

//Dispatch Action 
const dispatchDeleteToDo = e => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
}

const paintToDos = () => {

    const toDos = store.getState();
    ul.innerHTML= ""  //얘가 없으면 중복으로 전 애들까지 같이 다시 repaint 
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });

};
store.subscribe(paintToDos); //store가 바뀔 때마다 paintToDo 실행 

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = ""; //submit 이후 다시 초기화하는 부분 
    dispatchAddToDo(toDo);
};


form.addEventListener("submit", onSubmit);

*/