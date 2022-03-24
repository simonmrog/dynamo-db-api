"use strict";

import boom from "@hapi/boom";

import heroService from "../services/hero.js";

class HeroController {
  async getAll(req, res, next) {
    try {
      const limit = "limit" in req.query ? req.query.limit : 9999;
      const heroes = await heroService.getAll(limit);
      res.status(200).json(heroes);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const hero = await heroService.getById(id);
      if (!hero) throw boom.notFound("Hero not found");
      res.status(200).json(hero);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const payload = req.body;
      const newHero = await heroService.create(payload);
      if (!newHero) throw boom.internal("Could not create hero");
      res.status(201).json(newHero);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const updatedHero = await heroService.update(id, payload);
      if (!updatedHero) throw boom.internal("Could not update hero");
      res.status(200).json(updatedHero);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await heroService.delete(id);
      res.status(204);
    } catch (err) {
      next(err);
    }
  }
}

export default new HeroController();
