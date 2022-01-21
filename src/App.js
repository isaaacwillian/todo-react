import React, { useEffect, useState } from "react";
import List from './components/List';
import Item from './components/Item';
import TodoForm from "./components/TodoForm";
import './Todo.css'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import listReducer from "./reducers/listReducer";

const store = createStore(listReducer);

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