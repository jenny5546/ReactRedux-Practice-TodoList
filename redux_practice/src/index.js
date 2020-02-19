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



/*

<NON-REDUX VERSION> 

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
