"use strict";

import reportService from "../services/reports.js";

describe("report service", () => {
  test("result is an object", () => {
    const report = reportService.xlsxReport([
      {
        name: "Tony Stark",
        alias: "IronMan",
        species: "Human",
        company: {
          name: "Marvel",
          team: "Avengers",
        },
      },
      {
        name: "James Howlett",
        alias: "Wolverine",
        species: "Mutant",
        company: {
          name: "Marvel",
          team: "X-Men",
        },
      },
    ]);

    expect(typeof report).toEqual("object");
  });

  test("html is generated successfully", () => {
    const report = reportService.htmlReport([
      {
        name: "Tony Stark",
        alias: "IronMan",
        species: "Human",
        company: {
          name: "Marvel",
          team: "Avengers",
        },
      },
      {
        name: "James Howlett",
        alias: "Wolverine",
        species: "Mutant",
        company: {
          name: "Marvel",
          team: "X-Men",
        },
      },
    ]);
    expect(report).toContain("<html>");
  });
});
