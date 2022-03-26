import pdf from "html-pdf";
import * as xlsx from "xlsx/xlsx.mjs";

import { flattenObject, createHTML } from "../utils/helpers.js";

class ReportService {
  async pdfReport(data) {
    const flatData = data.map((item) => flattenObject(item));
    const html = createHTML(flatData);
    const options = { format: "Letter" };
    pdf.create(html, options).toStream(function (err, res) {
      if (err) return console.log(err);
      console.log(res);
      return res;
    });
  }

  xlsxReport(data, sheetname) {
    const flatData = data.map((item) => flattenObject(item));
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(flatData);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetname);
    const result = xlsx.write(workbook, { bookType: "xlsx", type: "buffer" });
    return result;
  }
}

export default new ReportService();
