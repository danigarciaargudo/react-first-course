import { useEffect, useState } from "react";

import { getGifs } from "../api/getGifs.js"
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async ()  => {
        console.log('category', category)
        const images = await getGifs(category)
        setImages(images);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [ ])

  return {
    images,
    isLoading
  }
}
