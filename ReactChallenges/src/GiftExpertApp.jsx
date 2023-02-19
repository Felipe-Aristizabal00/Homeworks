import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "./challenge.css"

export const GiftExpertApp = () => {

    const [categories, setCategories]= useState(['One Piece'])

    const onAddCategory = ( category ) => {
        setCategories( list => [...list, category])
    }

    return(
        <>
            <h1> Gift Expert </h1>
            <AddCategory onAddCategory={onAddCategory} />{
              categories.map(
                (category, key) => 
                    {
                        return <GifGrid category= { category } key={ key }/>
                    }  
              )
            }
        </>
    )
}