export const getHeroes = {
  get: {
    tags: ["Heroes"],
    description: "Get Heroes",
    operationId: "getHeroes",
    parameters: [
      {
        name: "limit",
        in: "query",
        schema: { type: "integer" },
        description: "Limit",
        default: 100,
      },
    ],
    responses: {
      200: {
        description: "Heroes Found Successfully",
        content: {
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#components/schemas/HeroInDB",
              },
            },
          },
        },
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
};

export const createHero = {
  post: {
    tags: ["Heroes"],
    description: "Create Hero",
    operationId: "createHero",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/BaseHero",
          },
        },
      },
    },
    responses: {
      201: {
        description: "Hero Created Successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/HeroInDB",
            },
          },
        },
      },
      400: {
        description: "Bad Request",
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
};

export const getHeroById = {
  get: {
    tags: ["Heroes"],
    description: "Get Hero By ID",
    operationId: "getHeroById",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: { type: "string" },
        required: true,
        description: "Hero ID",
      },
    ],
    responses: {
      200: {
        description: "Hero Found Successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/HeroInDB",
            },
          },
        },
      },
      400: {
        description: "Bad Request",
      },
      404: {
        description: "Hero Not Found",
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
};

export const updateHero = {
  patch: {
    tags: ["Heroes"],
    description: "Update Hero",
    operationId: "updateHero",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          type: "string",
        },
        required: true,
        description: "Hero ID",
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/BaseHero",
          },
        },
      },
    },
    responses: {
      200: {
        description: "Hero update successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/HeroInDB",
            },
          },
        },
      },
      400: {
        description: "Bad Request",
      },
      404: {
        description: "Hero Not Found",
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
};

export const deleteHero = {
  delete: {
    tags: ["Heroes"],
    description: "Delete Hero",
    operationId: "deleteHero",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          type: "string",
        },
        required: true,
        description: "Hero ID",
      },
    ],
    responses: {
      201: {
        description: "Hero Deleted Successfully",
      },
      404: {
        description: "Hero Not Found",
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
};
