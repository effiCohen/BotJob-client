import React from 'react'
import { useNavigate } from 'react-router-dom';

function ItemClient(props) {
    let nav = useNavigate();
    let item = props.item;
    // console.log(item);

    const toQushtions = () => {
        console.log(item._id);
        nav("/homeQushtions");
      };

    return (
        <tr
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-4 py-2 font-medium">{item._id}</td>
            <td className="whitespace-nowrap px-4 py-2">{item.date_created}</td>
            <td className="whitespace-nowrap px-4 py-2">{item.job}</td>
            <td className="whitespace-nowrap px-4 py-2">20:35 min</td>
            <td className="whitespace-nowrap px-4 py-2">{item.questions.length} - questions</td>
            <td onClick={toQushtions} className="whitespace-nowrap px-4 py-2">...</td>
        </tr>
    )
}

export default ItemClient