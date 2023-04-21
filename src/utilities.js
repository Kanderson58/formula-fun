import { getData } from "./apiCalls";
import { sampleCleanedDrivers, sampleConstructor, sampleSingleDriver1 } from "./sampleData";

export const cleanDriverData = () => {
  // return getData('rankings/drivers?season=2021').then(data => {
  //   return data.response.map(driver => {
  //     return {
  //       name: driver.driver.name,
  //       position: driver.position,
  //       points: driver.points ? driver.points : 0
  //     }
  //   })
  // });
  return sampleCleanedDrivers
}

export const cleanSingleDriver = (name) => {
  // return getData(`drivers?name=${name}`).then(data => data.response.map(driver => {
  //  return {
  //    name: driver.name,
  //    firstName: driver.name.substring(0, driver.name.indexOf(' ')),
  //    image: driver.image,
  //    number: driver.number,
  //    team: driver.teams[1].team.name,
  //    careerPoints: driver.career_points,
  //    birthday: driver.birthdate,
  //    birthplace: driver.birthplace,
  //    country: driver.country.name,
  //    totalRaces: driver.grands_prix_entered,
  //    totalPodiums: driver.podiums,
  //    totalTeams: driver.teams.length,
  //    highestFinish: driver.highest_race_finish.position,
  //    numHighest: driver.highest_race_finish.number,
  //    worldChamp: driver.world_championships
  //  }
  // }))
  return sampleSingleDriver1;
}

export const cleanConstructors = (year) => {
  // return getData(year).then(data => data.response.map(team => {
  //   return {
  //     team: team.team.name,
  //     points: team.points,
  //     logo: team.team.logo
  //   }
  // }))
  return sampleConstructor;
}