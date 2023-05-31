import React from 'react'

export default function TodoList(props) {
  return (
    <li className='listItem'>
    {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash" onClick={e=>{
          props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}
