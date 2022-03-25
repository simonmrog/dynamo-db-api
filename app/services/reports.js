import { flattenObject } from "../utils/helpers.js";

class ReportService {
  pdfReport(data) {
    const flatData = data.map((item) => flattenObject(item));
    return flatData;
  }

  xlsxReport(data) {
    const flatData = data.map((item) => flattenObject(item));
    return flatData;
  }

  generateReport(data, format) {
    let report;
    switch (format) {
      case "pdf":
        report = this.pdfReport(data);
      default:
        report = this.xlsxReport(data);
    }
    return report;
  }
}

export default new ReportService();
