// Your initial data here
// Write your code below data.

let data = {
  abilities: [
    {
      ability: {
        name: 'chlorophyll',
        url: 'https://pokeapi.co/api/v2/ability/34/',
      },
      is_hidden: true,
      slot: 3,
    },
    {
      ability: {
        name: 'overgrow',
        url: 'https://pokeapi.co/api/v2/ability/65/',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: 64,
  forms: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1/',
    },
  ],
  height: 7,
  id: 1,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
  moves: [
    {
      move: {
        name: 'razor-wind',
        url: 'https://pokeapi.co/api/v2/move/13/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'crystal',
            url: 'https://pokeapi.co/api/v2/version-group/4/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'gold-silver',
            url: 'https://pokeapi.co/api/v2/version-group/3/',
          },
        },
      ],
    },
  ],

  name: 'bulbasaur',
  order: 1,
  species: {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    front_shiny_female: null,
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  types: [
    {
      slot: 2,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
    {
      slot: 1,
      type: {
        name: 'grass',
        url: 'https://pokeapi.co/api/v2/type/12/',
      },
    },
  ],
  weight: 69,
};

// Challenge 1
console.log("Challenge 1");
let {height, weight} = data;
height = height.toString();
weight = weight.toString();
console.log(`Height/weight of the Pokemon is ${height}m / ${weight}kg`);

// Challenge 2
console.log("--------------------------/--------------------------\nChallenge 2");
height = parseInt(height);
weight = parseInt(weight);
console.log(`Pokemon's BMI is ${weight/(height * height)}bmi`);

// Challenge 3
console.log("--------------------------/--------------------------\nChallenge 3");
let {name} = data;
console.log(`Pokemon's name is ${name.toUpperCase()}, it has ${name.length} letters`);

// Challenge 4
console.log("--------------------------/--------------------------\nChallenge 4");
console.log(`Pokemon's name contains "bulba": ${name.includes("bulba")}`);

// Challenge 5
console.log("--------------------------/--------------------------\nChallenge 5");
let firstTwoLetters = name.substring(0, 2);
let lastTwoLetters = name.substring(name.length - 2);
const newName = firstTwoLetters.concat(lastTwoLetters);
console.log(`New name is ${newName}`);

// Challenge 6
console.log("--------------------------/--------------------------\nChallenge 6");
const nameArray = [newName];
console.log(nameArray);

// Challenge 7
console.log("--------------------------/--------------------------\nChallenge 7");
const {types} = data;
for (let type of types) {
  console.log(`Type name is ${type.type.name}`);
}

// Challenge 8
console.log("--------------------------/--------------------------\nChallenge 8");
const {abilities} = data;
console.log(Array.isArray(abilities));

// Challenge 9
console.log("--------------------------/--------------------------\nChallenge 9");
console.log(abilities[abilities.length - 1].ability.name);

// Challenge 10
console.log("--------------------------/--------------------------\nChallenge 10");
const lastAbility = data.abilities.pop();
data.abilities.push(lastAbility);

// Challenge 11
console.log("--------------------------/--------------------------\nChallenge 11");
let statsArray = [];
for (const stat of data.stats) {
  console.log("Base stat is",stat.base_stat);
  statsArray.push(stat.base_stat);
}

// Challenge 12
console.log("--------------------------/--------------------------\nChallenge 12");
console.log(statsArray);
const filteredStats = statsArray.filter(stats => stats > 47);
console.log(filteredStats);

// Challenge 13
console.log("--------------------------/--------------------------\nChallenge 13");
const reversedArrayStats = statsArray.reverse();
console.log(reversedArrayStats);

// Challenge 14
console.log("--------------------------/--------------------------\nChallenge 14");
let statsArrayFirstTwo= statsArray.slice(0, 2);
console.log(statsArrayFirstTwo);

// Challenge 15
console.log("--------------------------/--------------------------\nChallenge 15");
statsArray[0] = "Altay";
console.log(statsArray);

// Challenge 16
console.log("--------------------------/--------------------------\nChallenge 16");
for (const property in data) {
  console.log(`Key: ${property}, Value: ${data[property]}`);
}

// Challenge 17
console.log("--------------------------/--------------------------\nChallenge 17");
const avatar = document.querySelector('#pokemon-avatar');
const pok_name = document.querySelector('#pokemon-name');
const info = document.querySelector('#info');
const name2 = data.name;
const height2 = height;
const weight2 = weight;
const url = data.sprites.front_default;
avatar.src = url;
pok_name.innerHTML = name;
info.innerHTML = `
  <span> Height ${height}</span> -
  <span> Weight ${weight}</span>
`;