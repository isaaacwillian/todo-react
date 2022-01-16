import React from "react";
import Card from './Card';

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

function ListItem(props) {

    return (

        <li >
            <Card className={props.item.done ? "done box" : "box"}>
                <span className="text">{props.item.text}</span>
                <div>
                    <button onClick={() => { props.onDone(props.item) }}>
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}>
                        <span className="material-icons">delete</span>
                    </button>
                </div>
            </Card>
        </li>)

}

export default ListItem;