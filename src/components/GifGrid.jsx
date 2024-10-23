
import { GifItem } from "../components";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);    

    console.log('isLoading', isLoading)
    
    return (
        <>
        <h2>{ category }</h2>
        { isLoading && <h2>Cargando</h2>}
        <div className="card-grid">
            { images.map((image) => (
                <GifItem key={ image.id } {...image} />
            )
        )}
        </div>
        </>
    )
}