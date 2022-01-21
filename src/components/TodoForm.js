import React from "react";
import { useDispatch } from "react-redux";
import {addItem} from '../actions/listAction'

function TodoForm(props) {
    const dispatch = useDispatch();

    function addItemEvent(event) {
        event.preventDefault();
        let text = document.getElementById("text");
        if (text.value) {
            // setItems([...items, text.value]);
            dispatch(addItem(text.value));
            text.value = "";
        }
    }

    return (
        <form>
            <input type="text" id="text" placeholder="O que eu tenho que fazer?"></input>
            <button onClick={addItemEvent}>+</button>
        </form>
    )
}

export default TodoForm;