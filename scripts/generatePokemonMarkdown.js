import fs from 'node:fs'

const main = async () => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025')

  const pokemons = await result.json()

  await Promise.all(pokemons.results.map(async (pokemon) => {
    const pokemonResult = await fetch(pokemon.url)
    const pokemonData = await pokemonResult.json()

    const pokemonObject = {
      id: pokemonData.id,
      name: pokemon.name,
      types: pokemonData.types.map(t => t.type.name),
      image: pokemonData.sprites.front_default
    }

    const stream = fs.createWriteStream(`./src/content/pokemon/${pokemonObject.name}.md`);
    stream.once('open', () => {
      stream.write(`---
id: ${pokemonObject.id}
title: ${pokemonObject.name}
types: [${pokemonObject.types.concat()}]
image: ${pokemonObject.image}
---`)
      stream.end()
    })

  })
  )
}

main()