// import pdf from "html-pdf";
import pdfmake from "pdfmake";

import * as xlsx from "xlsx/xlsx.mjs";

import { flattenObject, createHTML } from "../utils/helpers.js";

var fonts = {
  Roboto: {
    normal: "fonts/Roboto-Regular.ttf",
    bold: "fonts/Roboto-Medium.ttf",
    italics: "fonts/Roboto-Italic.ttf",
    bolditalics: "fonts/Roboto-MediumItalic.ttf",
  },
};

class ReportService {
  async pdfReport(data) {
    const flatData = data.map((item) => flattenObject(item));
    console.log(flatData);
    // const html = createHTML(flatData);

    const docDefinition = {
      content: [
        { text: "Heroes", style: "subheader" },
        {
          style: "tableExample",
          table: {
            body: [
              Object.keys(flatData[0]),
              flatData.map((hero) => {
                return Object.values(hero).map((column) => ({ text: column }));
              }),
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        tableExample: {
          margin: [0, 5, 0, 15],
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: "black",
        },
      },
    };

    const pdfDoc = pdfmake.createPdf(docDefinition);
    console.log(typeof pdfDoc);
    pdfDoc.pipe(fs.createWriteStream("pdfs/tables.pdf"));
    pdfDoc.end();
    // const options = {
    //   format: "A4",
    //   orientation: "landscape",
    //   border: {
    //     top: "0.1in",
    //   },
    //   timeout: "120000",
    // };
    // pdf.create(html, options).toFile("./myfile.pdf", function (err, res) {
    //   if (err) return console.log(err);
    //   console.log(res);
    //   console.log("success");
    //   return res;
    // });
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
