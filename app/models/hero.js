"use strict";

import dynamoose from "dynamoose";
import { v4 as uuidv4 } from "uuid";

const HeroSchema = new dynamoose.Schema(
  {
    id: { type: String, hashkey: true, default: uuidv4 },
    name: { type: String },
    alias: { type: String },
    species: { type: String },
    company: {
      type: Object,
      schema: {
        name: String,
        team: String,
      },
    },
  },
  { timestamps: true },
);

const HeroModel = dynamoose.model("Heroes", HeroSchema, { create: true });
export default HeroModel;
