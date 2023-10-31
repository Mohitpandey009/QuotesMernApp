import React, { useState } from 'react'
import axios from 'axios'
export default function AddQuote() {

  const [text,setText]=useState()
  const [author,setAuthor]=useState()

  const addTime =()=>{
    axios.post("http://localhost:3000/createdata", {text,author})
    .then(res=> console.log("data added  " + res))
    setAuthor("")
    setText("")
    }
  return (
    <>
      <div class="position-absolute top-50 start-50 translate-middle">
    <div className="home">
      <div className="one">
        <label htmlFor="quote">Enter your Quote</label>
      </div>
      <div className="input">
        <textarea name="" id="" cols="30" rows="5" onChange={e=>setText(e.target.value)} value={text} ></textarea>
      </div>
      <div className="name">
        <input type="text" placeholder='Enter Author Name' onChange={e=>setAuthor(e.target.value)}  value={author} />
      </div>
      <button className='btn btn-primary' onClick={addTime}>Submit</button>
    </div>
    </div>
    </>
  )
}
