import { getSeason } from "./apiCalls";
import sampleCleanedDrivers from "./sampleData";

export const cleanDriverData = () => {
  // return getSeason().then(data => {
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