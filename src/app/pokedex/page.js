import { getData } from "../api/routes"
export default async function Pokedex() {
  const data = await getData()
    return (
      <main>
         <section>
        {data.results.map(async (pokemon, i) =>{
          let poke_info = await getData(pokemon.url)
          return(
          <div key={poke_info.id}>
            <p>{poke_info.name}</p>
            <img src={poke_info.sprites.other.showdown.front_shiny} alt="" />
          </div>
        )
      })}

      </section>
      <img src="https://25.media.tumblr.com/tumblr_lvwmhdE0lN1qg0dcvo1_500.gif" alt="" />

      <section>
        
      </section>
      </main>
     
    )
  }
