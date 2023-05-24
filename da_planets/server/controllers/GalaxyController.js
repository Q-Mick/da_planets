import BaseController from "../utils/BaseController.js";
import { galaxyService } from "../services/GalaxyService.js";
import { planetsService } from "../services/PlanetsServices.js";
export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxies");
    // NOTE 404 errors will be here
    this.router
      // NOTE in routes the first parameter is the path and the 2nd is the function tied to it
      .post("", this.createGalaxy)
      .get("", this.getPlanets)
      .get('/:id', this.getById)
      .get('/:id/planets', this.getPlanetsByGalaxyId)
  }
  async createGalaxy(req, res, next) {
    try {
        const galaxyData = req.body;
        const newGalaxy = await galaxyService.createGalaxy(galaxyData);
        return res.send(newGalaxy);
    } catch (error) {
        next(error);
    }
  }

  async getPlanets(req, res, next) {
    try {
        const query = req.query
        const galaxies = await galaxyService.getGalaxies(query)
        res.send(galaxies)
    } catch (error) {
      next(error);
    }
  }


  async getById(req, res, next) {
    try {
        const id = req.params.id
        const galaxy = await galaxyService.getById(id)
        res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetsByGalaxyId(req, res, next) {
   try {
      const galaxyId = req.params.id
      const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
      res.send(planets)
   } catch (error) {
    next(error)
   }
  }
}
