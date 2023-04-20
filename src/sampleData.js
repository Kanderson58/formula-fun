const sampleCleanedDrivers = [
  {name: 'Max Verstappen', position: 1, points: '395.5'},
  {name: 'Lewis Hamilton', position: 2, points: '387.5'},
  {name: 'Valtteri Bottas', position: 3, points: 226},
  {name: 'Sergio Perez', position: 4, points: 190},
  {name: 'Carlos Sainz Jr', position: 5, points: '164.5'},
  {name: 'Lando Norris', position: 6, points: 160},
  {name: 'Charles Leclerc', position: 7, points: 159},
  {name: 'Daniel Ricciardo', position: 8, points: 115},
  {name: 'Pierre Gasly', position: 9, points: 110},
  {name: 'Fernando Alonso', position: 10, points: 81},
  {name: 'Esteban Ocon', position: 11, points: 74},
  {name: 'Sebastian Vettel', position: 12, points: 43},
  {name: 'Lance Stroll', position: 13, points: 34},
  {name: 'Yuki Tsunoda', position: 14, points: 32},
  {name: 'George Russell', position: 15, points: 16},
  {name: 'Kimi Raikkonen', position: 16, points: 10},
  {name: 'Nicholas Latifi', position: 17, points: 7},
  {name: 'Antonio Giovinazzi', position: 18, points: 3},
  {name: 'Mick Schumacher', position: 19, points: 0}, 
  {name: 'Nikita Mazepin', position: 20, points: 0}
]

const sampleSingleDriver1 = [
  {
    name: 'Max Verstappen',
    firstName: 'Max',
    image: "https://media-3.api-sports.io/formula-1/drivers/25.png",
    number: 1,
    team: 'Red Bull',
    careerPoints: "2080.5",
    birthday: '1997-09-30',
    birthplace: "Hasselt",
    country: 'Netherlands',
    totalRaces: 166,
    totalPodiums: 80,
    totalTeams: 9,
    highestFinish: 1,
    numHighest: 37,
    worldChamp: 2
  }
]

const sampleSingleDriver2 = [
  {
    name: 'Lewis Hamilton',
    firstName: 'Lewis',
    image: "https://media-3.api-sports.io/formula-1/drivers/44.png",
    number: 44,
    team: 'Mercedes-AMG Petronas',
    careerPoints: "4443.5",
    birthday: '1985-01-07',
    birthplace: "Stevenage, United Kingdom",
    country: 'United Kingdom',
    totalRaces: 288,
    totalPodiums: 192,
    totalTeams: 2,
    highestFinish: 1,
    numHighest: 103,
    worldChamp: 7
  }
]

const sampleConstructor = [
  {points: 613, team: 'Mercedes-AMG Petronas', logo: 'https://media-1.api-sports.io/formula-1/teams/5.png'},

  {points: 585, team: 'Red Bull Racing', logo: 'https://media-3.api-sports.io/formula-1/teams/1.png'},

  {points: 323, team: 'Scuderia Ferrari', logo: 'https://media-1.api-sports.io/formula-1/teams/3.png'},
  
  {points: 275, team: 'McLaren Racing', logo: 'https://media-3.api-sports.io/formula-1/teams/2.png'},

  {points: 155, team: 'Alpine F1 Team', logo: 'https://media-1.api-sports.io/formula-1/teams/13.png'},

  {points: 142, team: 'Scuderia AlphaTauri Honda', logo: 'https://media-1.api-sports.io/formula-1/teams/7.png'},

  {points: 77, team: 'Aston Martin F1 Team', logo: 'https://media-3.api-sports.io/formula-1/teams/17.png'},

  {points: 23, team: 'Williams F1 Team', logo: 'https://media-2.api-sports.io/formula-1/teams/12.png'},

  {points: 13, team: 'Alfa Romeo', logo: 'https://media-2.api-sports.io/formula-1/teams/18.png'},

  {points: 0, team: 'Haas F1 Team', logo: 'https://media-3.api-sports.io/formula-1/teams/14.png'}
]

export { sampleCleanedDrivers, sampleSingleDriver1, sampleSingleDriver2, sampleConstructor }