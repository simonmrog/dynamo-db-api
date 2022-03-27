import boom from "@hapi/boom";

import heroService from "../services/heroes.js";
import reportService from "../services/reports.js";

class ReportController {
  async getXlsxReportFile(req, res, next) {
    try {
      let { limit } = req.query;
      const heroesList = await heroService.getAll(limit);
      if (!heroesList || heroesList.length == 0)
        throw boom.badData("No data to generate the file");
      const report = reportService.xlsxReport(heroesList, "heroes");
      res.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-disposition": `attachment; filename=heroes.xlsx`,
      });
      res.end(report);
    } catch (err) {
      next(err);
    }
  }

  async getHTMLReportFile(req, res, next) {
    try {
      let { limit } = req.query;
      const heroesList = await heroService.getAll(limit);
      if (!heroesList || heroesList.length == 0)
        throw boom.badData("No data to generate the file");
      const report = await reportService.htmlReport(heroesList, "heroes");
      res.send(report);
    } catch (err) {
      next(err);
    }
  }
}

export default new ReportController();
