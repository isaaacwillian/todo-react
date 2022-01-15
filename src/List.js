import React from "react";

function DoneImg(props) {
    if (props.done) {
        return (<span className="material-icons">
            check_circle
        </span>)
    } else {
        return (<span className="material-icons">
            check_circle_outline
        </span>)
    }
}

function List(props) {

    return (

        <ul>
            {props.items.map(item => <li key={item.id} className={item.done ? "done" : ""}>
                {item.text}
                <button onClick={() => { props.onDone(item) }}><DoneImg done={item.done}></DoneImg></button>
                <button onClick={() => { props.onItemDeleted(item) }}><span className="material-icons">delete</span></button>
            </li>)}

        </ul>
    )
}

export default List;