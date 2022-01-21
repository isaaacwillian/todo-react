import React from "react";
import List from './components/List';
import TodoForm from "./components/TodoForm";
import './Todo.css'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import listReducer from "./reducers/listReducer";

function persistState(state){
    localStorage.setItem('savedItems', JSON.stringify(state));
}
function loadState(){
    const actualState = localStorage.getItem('savedItems');
    if(actualState){
        return JSON.parse(actualState);
    } else {
        return []
    }
}
const store = createStore(listReducer, loadState());

store.subscribe(()=>{
    persistState(store.getState());
})

function App() {

    return (
        <div className="container">
            <h1>Lista de afazeres</h1>
            <Provider store={store}>
                <TodoForm></TodoForm>
                <List></List>
            </Provider>

        </div>
    )

}

export default App;