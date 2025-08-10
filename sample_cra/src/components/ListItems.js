import 'C:/Users/shiva/OneDrive/Desktop/react/CRA/sample_cra/src/componentsCSS/Content.css'
import React from 'react'
import LineItems from './LineItems';


const ListItems = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
      {items.map((item) => {
        return(
          <LineItems 
            item = {item}
            key = {item.id}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
          />     
        );
      })}
    </ul>
  )
}

export default ListItems