export const getReportFile = {
  get: {
    tags: ["Reports"],
    description: "Get report file",
    operationId: "getReportFile",
    parameters: [
      {
        name: "limit",
        in: "query",
        schema: {
          type: "string",
        },
        description: "Limit",
        default: 100,
      },
      {
        name: "format",
        in: "query",
        schema: {
          type: "string",
        },
        description: "File format",
        default: "xlsx",
      },
    ],
  },
};
