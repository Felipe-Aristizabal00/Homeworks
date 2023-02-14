//Challenge #4
import { useState } from 'react'
import React from 'react'
import "./challenge.css"

const ComponentApp = () => {

    const [category, setCategory] = useState('')

    const [categories, setCategories] = useState(['first category', 'second category'])

    const addCategory = () => {
        setCategories([...categories, category])
        setCategory('')
    }

    return (
        <div className='contenedor'>
            <h1> Categories </h1>
            <span> Las categorías que hay son: </span>
            <ol>
                {
                    categories.map(
                        (category, key) =>
                        {
                            return <li key= { key }> {category} </li>
                        }
                    )
                }
            </ol>
            <hr></hr>
            <input value={category} onChange = { (e) => setCategory(e.target.value) }></input>
            <button className='botones' onClick= { () => addCategory()}> Añadir categoría</button>
        </div>
  )
}

export default ComponentApp