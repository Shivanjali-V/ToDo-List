import 'C:/Users/shiva/OneDrive/Desktop/react/CRA/sample_cra/src/componentsCSS/Content.css'
import React from 'react'
import {FaTrash} from "react-icons/fa";

const LineItems = ({item, handleCheck, handleDelete}) => {
    return (
        <li className='Item' key={item.id}>
            <input
                type = "checkbox"
                onChange={() => {handleCheck(item.id)}}
                checked = {item.checked}
            />
            <label onClick={() => {handleCheck(item.id)}}>{item.item}</label>
            <FaTrash 
                role='button'
                tabIndex="0"
                onClick={() => {handleDelete(item.id)}}
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItems