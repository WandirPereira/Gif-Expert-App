import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
//akeTxHgvQS9T46TcG6zV0kAn8NVRE9Ub



export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = ( newCategory) => {
      if ( categories.includes( newCategory )) return;
      setCategories([ newCategory, ...categories ]);
      //setCategories([ 'Valorant']);
      console.log( newCategory );
  }

  return (
    <>
      { /*Título*/}
      <h1>GifExpertApp</h1>

             
 
      { /*Input*/}
      <AddCategory 
          //setCategories={ setCategories }/>
          onNewCategory={ (event) => onAddCategory(event) }

        />

        {
          categories.map( (category, i) =>  (
                <GifGrid key= { category } category={ category } />
            )
          )
        }

      { /*Listado de Gifs*/}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
        { /* Gif Item*/}
    </>
  )
}


