import * as xlsx from "xlsx/xlsx.mjs";

import { flattenObject, createHTML } from "../utils/helpers.js";

class ReportService {
  htmlReport(data) {
    const flatData = data.map((item) => flattenObject(item));
    const html = createHTML(flatData);
    return html;
  }

  xlsxReport(data, sheetname) {
    const flatData = data.map((item) => flattenObject(item));
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(flatData);
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetname);
    const result = xlsx.write(workbook, { bookType: "xlsx", type: "buffer" });
    console.log(typeof result);
    return result;
  }
}

export default new ReportService();
