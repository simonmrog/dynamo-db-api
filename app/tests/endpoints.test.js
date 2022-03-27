"use strict";

import { jest } from "@jest/globals";
import session from "supertest-session";

import app from "../app.js";

jest.useFakeTimers();

describe("integration tests for endpoints", () => {
  const request = session(app);

  test("[GET] /api/heroes returns 200", async () => {
    const res = await request.get("/api/heroes");
    expect(res.status).toEqual(200);
    expect(typeof res.body).toEqual("object");
  });

  test("[GET] /api/heroes/{fake_id} returns 404", async () => {
    const res = await request.get("/api/heroes/fakeid");
    expect(res.status).toEqual(404);
  });

  test("[POST] /api/heroes returns 201 and creates the object", async () => {
    const newHero = {
      name: "James Howlett",
      alias: "Wolverine",
      species: "Mutant",
      company: {
        name: "Marvel",
        team: "X-Men",
      },
    };
    const response = await request.post("/api/heroes").send(newHero);
    expect(response.status).toEqual(201);
    const heroInDB = response.body;
    const deleteResponse = await request.delete(`/api/heroes/${heroInDB.id}`);
    expect(deleteResponse.status).toEqual(204);
  });
});
