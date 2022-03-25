"use strict";

export default class BaseService {
  constructor(model) {
    this.model = model;
  }

  async getAll(limit = 100, filter = {}) {
    const records = await this.model.scan(filter).limit(limit).exec();
    return records;
  }

  async getById(id) {
    const record = await this.model.get({ id });
    return record;
  }

  async create(payload) {
    const newRecord = await this.model.create(payload);
    return newRecord;
  }

  async update(id, payload) {
    const updatedResult = await this.model.update({ id }, { ...payload });
    return updatedResult;
  }

  async delete(id) {
    await this.model.delete({ id });
  }
}
