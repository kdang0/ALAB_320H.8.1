
interface apiData {
    count: number,
    next: string,
    previous: string | null,
    results: [starship]
}

interface starship{
    name:string
}

const url = `https://swapi.dev/api/starships`;
export const getAllStarships = async () : Promise<[starship]>  => {
    const res = await fetch(url);
    const data : apiData = await res.json();
    return data.results;
}