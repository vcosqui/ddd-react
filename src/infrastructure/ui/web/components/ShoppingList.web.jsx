import {useEffect, useState} from "react";
import Item from '../../../../domain/entities/Item.ts'

export const ShoppingList = () => {

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {

        (async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const res2 = await fetch("https://jsonplaceholder.typicode.com/users");
            setItems(await res.json());
            setFilteredItems(await res2.json());
        })();

    }, []);

    return (
        <div>
            <div>
                <input type="text" placeholder="type to filter"/>
            </div>
            <div>
                {filteredItems.map((item: Item) => {
                    return item.id + ',' + item.name
                })}
            </div>
        </div>
    )
}