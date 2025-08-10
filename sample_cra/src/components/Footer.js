import React from 'react'
import 'C:/Users/shiva/OneDrive/Desktop/react/CRA/sample_cra/src/componentsCSS/Footer.css'

const Footer = ({length, checkedItemLength}) => {

  return (
    <footer className='foot'>
      {length} List {length === 1 ? "item" : "items"}
      <p>checkedItems : {checkedItemLength}</p>
    </footer>
  )
}

export default Footer