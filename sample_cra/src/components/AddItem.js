import 'C:/Users/shiva/OneDrive/Desktop/react/CRA/sample_cra/src/componentsCSS/Content.css'
import React from 'react'
import { useRef } from 'react';
import { TbSquareRoundedPlusFilled } from "react-icons/tb";

export const AddItem = ({newItem, setNewItem, handleSubmit,handleCheckedItems}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
        ref={inputRef}
        autoFocus
        id = 'addItem'
        type='text'
        placeholder='Add Item'   
        required     
        value = {newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type='submit'
        aria-label='Add Item'
        onClick={() => inputRef.current.focus()}
      ><TbSquareRoundedPlusFilled />
      </button>
      <button className='checkItem' onClick={() => handleCheckedItems()}>Checked Items</button>  
    </form>
  )
}
