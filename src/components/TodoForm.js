import React,{useState} from 'react'

function TodoForm(props) {
  const[Text,setText]=useState('');
  return (
    <div >
    <h1 className='todoinput'>TODO-LIST</h1>
       <input  className='todobox' type='text' placeholder='add a todo' value={Text} onChange={e=>{
        setText(e.target.value)
    }}
    />
    <button className='todo-button' onClick={()=>{
      props.addList(Text)
      setText('')
    }}> +</button>
    {/* <div>{Text}</div> */}
    </div>
  )
}

export default TodoForm

