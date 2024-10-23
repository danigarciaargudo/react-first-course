import { useState } from "react"
import { AddCategory, GifGrid } from "./index"
export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Rick and Morty'])
    const [advice, setAdvice] = useState('')

    const addCategories = (newCategory) => {
        setAdvice('');
        if(categories.includes(newCategory)) {
            setAdvice(newCategory);
            return;
        };
        setCategories([...categories, newCategory])
    }

    console.log('categories', categories)
    return (
        <>
        <h1>Gift Expert App</h1>
        {advice!== '' && 
            
            <div class="nota">No se ha incluido {advice} por estar ya incluido</div>
            }

        <AddCategory onNewCategory={(event) => addCategories(event)}/>

        <ol>
            { categories.map(category => (
                <div key={ category }>
                <GifGrid category={ category } />
                </div>
            ))
                }
        </ol>
        </>
    )
}