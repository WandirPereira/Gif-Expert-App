import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const {images, isLoading } = useFetchGifs( category );

    //console.log( isLoading);
    
    // const [images, setImages] =useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category);
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //     getImages();
    // }, [])

 
    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && (<h2>Carregando...</h2>)
            }

            <div className="card-grid">
                {
                    images.map( (image) =>  (
                        // <li key= { id }> { title }</li> 
                        <GifItem 
                            key={image.id} 
                            // title={image.title}
                            // url={image.url}
                            { ...image }
                        />
                    ))
                }
            </div>
            
        </>
    )
}

