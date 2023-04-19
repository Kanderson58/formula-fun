import { getSeason } from "./apiCalls";

export const cleanDriverData = () => {
  // return getSeason().then(data => {
  //   return data.response.map(driver => {
  //     return {
  //       name: driver.driver.name,
  //       position: driver.position,
  //       points: driver.points
  //     }
  //   })
  // });
  return getSeason().map(driver => {
    return {
      name: driver.driver.name,
      position: driver.position,
      points: driver.points
    }
  })
}