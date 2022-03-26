export const getXlsxReportFile = {
  get: {
    tags: ["Reports"],
    description: "Get report file in XLSX format",
    operationId: "getXlsxReportFile",
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
    ],
    responses: {
      200: {
        description: "Report generated successfully",
        content: {
          "application/octet-stream": {
            schema: {
              type: "string",
              format: "binary",
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

export const getPdfReportFile = {
  get: {
    tags: ["Reports"],
    description: "Get report file in PDF",
    operationId: "getPdfReportFile",
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
    ],
    responses: {
      200: {
        description: "Report generated successfully",
        content: {
          "application/pdf": {
            schema: {
              type: "string",
              format: "binary",
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
