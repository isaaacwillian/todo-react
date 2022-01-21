import React from "react";
import { useDispatch } from "react-redux";
import Card from './Card';
import { deleteItem, changeDone } from "../actions/listAction";

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
    const dispatch = useDispatch()
    return (

        <li>
            <Card className={props.item.done ? "done box" : "box"}>
                <span>{props.item.text}</span>
                <div>

                    <button onClick={() => {dispatch(changeDone(props.item.id)) }}>
                        <DoneImg done={props.item.done}></DoneImg>
                    </button>

                    <button onClick={() => { dispatch(deleteItem(props.item.id)) }}>
                        <span className="material-icons">delete</span>
                    </button>

                </div>
            </Card>     
        </li>)

}

export default ListItem;