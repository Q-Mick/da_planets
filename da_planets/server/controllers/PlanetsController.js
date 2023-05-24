import BaseController from "../utils/BaseController.js";
import { planetsService } from "../services/PlanetsServices.js";

export class PlanetsController extends BaseController{
  constructor(){
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanets)
  }
  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const newPlanet = await planetsService.createPlanet(planetData)
      res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }
  async getPlanets(req, res, next) {
    try {
      const query = req.query
      const planet = await planetsService.getPlanet(query)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}