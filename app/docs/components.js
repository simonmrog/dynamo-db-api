"use strict";

export default {
  components: {
    schemas: {
      HealthCheck: {
        type: "object",
        properties: {
          environment: { type: "string" },
          title: { type: "string" },
          description: { type: "string" },
          version: { type: "string" },
        },
      },
      BaseHero: {
        type: "object",
        properties: {
          name: { type: "string" },
          alias: { type: "string" },
          species: { type: "string" },
          company: {
            type: "object",
            properties: {
              name: { type: "string" },
              team: { type: "string" },
            },
          },
        },
      },
      HeroInDB: {
        type: "object",
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          alias: { type: "string" },
          species: { type: "string" },
          company: {
            type: "object",
            properties: {
              name: { type: "string" },
              team: { type: "string" },
            },
          },
          createdAt: { type: "string" },
          lastModified: { type: "string" },
        },
      },
    },
  },
};
