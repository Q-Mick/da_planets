import { BadRequest } from "../utils/Errors.js";
import { dbContext } from "../db/DbContext.js";

class PlanetsService{
 
  async createPlanet(planetData) {
      const newPlanet = await dbContext.Planet.create(planetData)
      return newPlanet
  }
  async getPlanet(query){
    const planet = await dbContext.Planet.find(query)
    return planet
  }
  async getPlanetsByGalaxyId(galaxyId) {
    const planets = await dbContext.Planet.find({galaxyId}) 
    return planets
  }
}

export const planetsService = new PlanetsService()