# Astrodex
Pokedex built with Astro.js, Node.js and PokeAPI.

There's a plan in the future to add the `npm run generatepokemon` execution during the project build, this will avoid the need of uploading more than 1k of markdown files to GitHub, as of now you can ignore this script to the execution of the project.

The reasoning of this script was that the base list of pokemons from PokeApi was too simple, only returning name and the query url, without the markdowns being generated before runing the project, all pages of pokemon would require 1 request to get the pokemons and one more request per pokemon in the page to get the necessary info (image, types, etc). This was a simple solution to avoid this problem and still run the project the way I intended. 

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run generatepokemon` | Runs the script that generates the pokemon md    |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
