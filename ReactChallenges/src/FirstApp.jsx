//rafce para la "Magia"
//Challenge #3
import { useState } from 'react'
import React from 'react'
import "./challenge.css"

const FirstApp = ({ value }) => {

    const [counter, setCounter] = useState(0)

    const handleAdd = () => {
        setCounter( counter + 1)
    }

    const handleSubsstract = () => {
        setCounter( counter - 1)
    }

    const handleReset = () => {
        setCounter( 0 )
    }

    return (
        <>
            <h1> Counter </h1>
            <span> El contador está en: { counter } </span>
            <hr></hr>
            <button className='botones' onClick = { () => handleAdd() }> +1 </button>
            <button className='botones' onClick = { () => handleSubsstract() }> -1 </button>
            <button className='botones'  onClick = { () => handleReset() }> Reset </button>
        </>
  )
}

export default FirstApp
