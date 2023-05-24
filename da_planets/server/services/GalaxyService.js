import { BadRequest } from "../utils/Errors.js";
import { dbContext } from "../db/DbContext.js";

class GalaxyService{
  async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxy.create(galaxyData)
    return newGalaxy
  }
  async getGalaxies(query) {
    const galaxies = await dbContext.Galaxy.find(query)
    return galaxies
  }
  async getById(id) {
    const galaxy = await dbContext.Galaxy.findById(id)
    return galaxy
  }



} 

export const galaxyService = new GalaxyService()