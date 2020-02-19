# React-Redux 연습하기

## Redux 의 구조

### Redux 란 무엇인가:
 
Redux: State를 한 곳에, 한 번에 관리해주는 것이 장점이라고 계속 이야기하는 듯. 
Redux 요소에는 Store, Action, Reducer라고 볼 수 있는데, 익숙한 React State에 빗대서 이야기하자면 
1. Store = React State 랑 같은 개념 
2. Reducer = function that modifies your data (only the reducer can modify your data)
3. Action: the way we communicate with the modifier. MESSAGE
    Dispatch 하는 것은, sending message to the reducer(modifier)

쉽게 생각해서, 
Store는 내 지갑 안에 있는 돈이라고 생각해보자. 
Action은 바나나를 사는 것 '행위'? 
Reducer는 그 바나나를 삼으로써 내 돈을 차감하는 것. 

Store에 내 money라는 data가 있고, action이 'buy' 같은 거라면, reducer는 내 돈을 바나나 금액만큼 차감해주겠지??그 데이터(돈) 자체를 수정해주는 ..약간 이렇게 생각하면 편할 것 같다.


Dispatch란? Sending actions to the Reducer
Subscribe란? Listens to changes of the data (store)