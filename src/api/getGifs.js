export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8p312KBHw2WcnbSXfuMFoHL4GHgimX95&q=${category}&limit=10&offset=5&rating=G&lang=es-ES`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    return data
}