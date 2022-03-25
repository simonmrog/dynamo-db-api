export const healthCheck = {
  get: {
    tags: ["Health Check"],
    description: "API Health Check",
    operationId: "healthCheck",
    parameters: [],
    responses: {
      200: {
        description: "API Running Successfully",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/HealthCheck",
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
