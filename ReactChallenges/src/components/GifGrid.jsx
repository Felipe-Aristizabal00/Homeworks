//Challenge 5}

import "../challenge.css"
import { GifItem } from "./GifItem"
import { useEffect, useState } from "react"

const getGifs = async ( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=lKF8gE3CsK19Qjv31EZI7xcH0hOyPAZr&q=${category}&limit=6&offset=0&rating=g&lang=en`
    const resp = await fetch( url )
    const { data } = await resp.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}

export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([])

    const newFunction = async() => {
        const gifsObtenidos = await getGifs(category)
        setImages(gifsObtenidos)
        console.log(gifsObtenidos)
    }

    useEffect(() => {
        newFunction()
    }, [])

    const clearGifs = () =>{
        setImages([])
    }    

    return (
        <>
            <h2> { category } </h2>
            <div className="categorias"> 
            {
                images.map( (images, key) => {
                    return <GifItem key={key} {...images}></GifItem>
                })
            }
            </div>
        </>
    )

}