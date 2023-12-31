
export async function getData(api_url = "https://pokeapi.co/api/v2/pokemon?limit=10") {
    const res = await fetch(api_url)
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
  
  }