import React from "react";

function TodoForm(props) {

    function addItem(event) {
        event.preventDefault();
        let text = document.getElementById("text");
        if (text.value) {
            // setItems([...items, text.value]);
            props.onAddItem(text.value);
            text.value = "";
        }
    }

    return (
        <form>
            <input type="text" id="text"></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;