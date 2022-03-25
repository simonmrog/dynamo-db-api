import boom from "@hapi/boom";

import heroService from "../services/heroes.js";
import reportService from "../services/reports.js";

class ReportController {
  async getReportFile(req, res, next) {
    try {
      const { limit, format } = req.query;
      const heroesList = await heroService.getAll(limit);
      if (!["xlsx", "pdf"].includes(format))
        throw boom.badRequest("Invalid file format");
      const report = reportService.generateReport(heroesList, format);
      res.status(200).json(report);
    } catch (err) {
      next(err);
    }
  }
}

export default new ReportController();
