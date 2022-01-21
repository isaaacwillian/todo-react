import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

function List(props) {

    const items = useSelector(state=>state);

    return (
        <ul>
            {items.map(item => <ListItem key={item.id} item={item}></ListItem>)}

        </ul >
    )
}

export default List;